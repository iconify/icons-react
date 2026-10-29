import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/ordx5ez8n.css';
import '../../css/k/ksulm8rer.css';
import '../../css/o/oh4nb-bcs.css';
import '../../css/z/zmpq0dbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ordx5ez8n wm-deco"/><path class="ksulm8rer wm-deco"/><path class="oh4nb-bcs"/><path class="zmpq0dbjk"/></g>`,
		"fallback": "withicons:chevron-up-blueprint",
	});
}

export default Component;
