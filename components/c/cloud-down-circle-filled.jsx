import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/t/td-d9yzhb.css';
import '../../css/i/ijgvb2wsd.css';
import '../../css/g/gq_2ljbqh.css';
import '../../css/y/ye3zg5bko.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGDjlvPhiJ"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="td-d9yzhb"/><path class="ijgvb2wsd"/><path class="gq_2ljbqh"/><path class="ye3zg5bko"/></g></mask></defs><circle mask="url(#SVGDjlvPhiJ)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:cloud-down-circle-filled",
	});
}

export default Component;
