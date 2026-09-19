import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6_63ym7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6_63ym7m"/>`,
		"fallback": "griddy-icons:chevron-down-filled",
	});
}

export default Component;
