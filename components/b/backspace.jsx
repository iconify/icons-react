import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2t8b4_yh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2t8b4_yh"/>`,
		"fallback": "famicons:backspace",
	});
}

export default Component;
