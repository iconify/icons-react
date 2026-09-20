import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nni0lirok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nni0lirok"/>`,
		"fallback": "pixelarticons:circle-info-solid",
	});
}

export default Component;
