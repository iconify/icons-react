import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lfu5k71ri.css';
import '../../css/g/gmoupbb8t.css';
import '../../css/y/yhio252-o.css';
import '../../css/h/hss3mfb5a.css';
import '../../css/t/t7j-yfbxu.css';
import '../../css/u/u6t8wfbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lfu5k71ri"/><path class="gmoupbb8t"/><path class="yhio252-o"/><path class="hss3mfb5a"/><path class="t7j-yfbxu"/><path class="u6t8wfbmu"/></g>`,
		"fallback": "solar:cup-line-duotone",
	});
}

export default Component;
