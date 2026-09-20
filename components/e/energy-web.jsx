import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmqol_-wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmqol_-wr"/>`,
		"fallback": "token:energy-web",
	});
}

export default Component;
