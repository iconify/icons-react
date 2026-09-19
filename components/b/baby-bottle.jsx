import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dze_mvbmy.css';
import '../../css/b/b4dudsbcs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dze_mvbmy"/><path class="b4dudsbcs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:baby-bottle",
	});
}

export default Component;
