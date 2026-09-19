import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zefpa7icl.css';
import '../../css/a/ahjnos-qj.css';
import '../../css/d/djzed1b0f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zefpa7icl"/><path clip-rule="evenodd" class="ahjnos-qj"/><path clip-rule="evenodd" class="djzed1b0f"/></g>`,
		"fallback": "healthicons:health-worker-form-outline",
	});
}

export default Component;
