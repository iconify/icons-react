import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyj_b1zxx.css';
import '../../css/o/o0x38t9mt.css';
import '../../css/x/xtr-3pbkh.css';
import '../../css/y/yuz75hb5q.css';
import '../../css/n/nnr4lzb9o.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uyj_b1zxx"/><path class="o0x38t9mt"/><path class="xtr-3pbkh"/><path class="yuz75hb5q"/><path class="nnr4lzb9o"/><path class="cfx1q448n"/></g>`,
		"fallback": "fluent-emoji-flat:clapping-hands-medium",
	});
}

export default Component;
