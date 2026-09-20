import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvfagilzx.css';

const viewBox = {"width":321,"height":294};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvfagilzx"/>`,
		"fallback": "thesvg-color:frnkln-technologies",
	});
}

export default Component;
