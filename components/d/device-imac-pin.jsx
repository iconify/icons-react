import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvh1ohb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvh1ohb0q"/>`,
		"fallback": "tabler:device-imac-pin",
	});
}

export default Component;
