import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/t/td-d9yzhb.css';
import '../../css/v/v7hcqlbvq.css';
import '../../css/r/rhbbopbqk.css';
import '../../css/h/h80afpafx.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGsRLBpbhx"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="td-d9yzhb"/><path class="v7hcqlbvq"/><path class="rhbbopbqk"/><path class="h80afpafx"/></g></mask></defs><circle mask="url(#SVGsRLBpbhx)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:cloud-up-circle-filled",
	});
}

export default Component;
