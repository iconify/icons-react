import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t24yx0btu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t24yx0btu"/>`,
		"fallback": "keyline-icons:diagram-successor",
	});
}

export default Component;
