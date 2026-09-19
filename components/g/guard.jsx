import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0mafrb1j.css';
import '../../css/w/wnnrfrbkh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0mafrb1j"/><path class="wnnrfrbkh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:guard",
	});
}

export default Component;
