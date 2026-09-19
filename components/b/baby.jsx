import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymumlibff.css';
import '../../css/i/iq0eetl8w.css';
import '../../css/c/cxmaafbfw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ymumlibff"/><path class="iq0eetl8w"/><path class="cxmaafbfw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:baby",
	});
}

export default Component;
