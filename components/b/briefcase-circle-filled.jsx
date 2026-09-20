import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/n/ndg7m8isl.css';
import '../../css/k/kejyeccmm.css';
import '../../css/o/oythmwbfe.css';
import '../../css/n/nxy2nv8vm.css';
import '../../css/s/shs8wabze.css';
import '../../css/v/vl2w4lb8e.css';
import '../../css/j/j_d97ibzd.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGQSn1ubNH"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="ndg7m8isl"/><path clip-rule="evenodd" class="kejyeccmm"/><path clip-rule="evenodd" class="oythmwbfe"/><path class="nxy2nv8vm"/><path clip-rule="evenodd" class="shs8wabze"/><path class="vl2w4lb8e"/><path clip-rule="evenodd" class="j_d97ibzd"/></g></mask></defs><circle mask="url(#SVGQSn1ubNH)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:briefcase-circle-filled",
	});
}

export default Component;
