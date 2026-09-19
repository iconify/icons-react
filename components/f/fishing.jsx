import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf-vh0nte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf-vh0nte"/>`,
		"fallback": "iconoir:fishing",
	});
}

export default Component;
