import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xglseobcr.css';
import '../../css/j/j6_pxzbzu.css';
import '../../css/j/jfomtzaau.css';
import '../../css/k/k9ax1odmq.css';
import '../../css/k/k22fi-b6t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xglseobcr"/><path class="j6_pxzbzu"/><path class="jfomtzaau"/><path class="k9ax1odmq"/><path class="k22fi-b6t"/></g>`,
		"fallback": "fluent-emoji-flat:castle",
	});
}

export default Component;
