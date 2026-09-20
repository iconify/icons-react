import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/aus8vg1ze.css';
import '../../css/o/oup9fib8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="aus8vg1ze"/><path class="oup9fib8n"/></g>`,
		"fallback": "keyline-icons:git-commit-horizontal-sharp-fill",
	});
}

export default Component;
