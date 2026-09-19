import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dpr6dv8_s.css';
import '../../css/c/c4ew_ccan.css';
import '../../css/n/nkqhc7b3e.css';
import '../../css/t/t6i9m3fze.css';
import '../../css/x/x9u1sytwj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dpr6dv8_s"/><path class="c4ew_ccan"/><path class="nkqhc7b3e"/><path class="t6i9m3fze"/><path class="x9u1sytwj"/></g>`,
		"fallback": "healthicons:imm-outline",
	});
}

export default Component;
