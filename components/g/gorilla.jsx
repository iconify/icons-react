import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwkoi_8sf.css';
import '../../css/s/srkzdqgbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pwkoi_8sf"/><path class="srkzdqgbk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:gorilla",
	});
}

export default Component;
