import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dykw83b6k.css';
import '../../css/q/q5xnm_t_s.css';
import '../../css/t/tx-h27bsk.css';
import '../../css/n/n5xurhcec.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dykw83b6k"/><path class="q5xnm_t_s"/><path class="tx-h27bsk"/><path class="n5xurhcec"/></g>`,
		"fallback": "fluent-emoji-flat:fallen-leaf",
	});
}

export default Component;
