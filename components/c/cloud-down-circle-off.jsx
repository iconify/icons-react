import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/td-d9yzhb.css';
import '../../css/i/ijgvb2wsd.css';
import '../../css/g/gq_2ljbqh.css';
import '../../css/q/qhzl36msm.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="td-d9yzhb"/><path class="ijgvb2wsd"/><path class="gq_2ljbqh"/><path class="qhzl36msm"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:cloud-down-circle-off",
	});
}

export default Component;
