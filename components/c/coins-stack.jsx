import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjhhafq6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjhhafq6k"/>`,
		"fallback": "griddy-icons:coins-stack",
	});
}

export default Component;
