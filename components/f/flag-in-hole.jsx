import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3a-foj_q.css';
import '../../css/p/pia6gcbxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o3a-foj_q"/><path class="pia6gcbxd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:flag-in-hole",
	});
}

export default Component;
