import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q5bvs4b8s.css';
import '../../css/x/xejwnnbvm.css';
import '../../css/q/q2t5n-b0f.css';
import '../../css/a/ac6x5rb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q5bvs4b8s"/><path class="xejwnnbvm"/><path class="q2t5n-b0f"/><path class="ac6x5rb4v"/></g>`,
		"fallback": "hugeicons:bus-02",
	});
}

export default Component;
