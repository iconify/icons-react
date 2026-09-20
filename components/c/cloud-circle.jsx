import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xjxhmjm8w.css';
import '../../css/u/udk7b6wou.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="xjxhmjm8w"/><path class="udk7b6wou"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:cloud-circle",
	});
}

export default Component;
