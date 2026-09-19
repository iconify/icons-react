import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4cha9blx.css';
import '../../css/y/ykuwhjb2f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d4cha9blx"/><path class="ykuwhjb2f"/></g>`,
		"fallback": "fluent-emoji-high-contrast:beverage-box",
	});
}

export default Component;
