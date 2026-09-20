import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/d/duc17k2td.css';
import '../../css/e/edr3z_b5u.css';
import '../../css/m/mingyz5ad.css';
import '../../css/e/ekdtdpbjz.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGGo7d0bgQ"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="duc17k2td"/><path class="edr3z_b5u"/><path class="mingyz5ad"/><path class="ekdtdpbjz"/></g></mask></defs><circle mask="url(#SVGGo7d0bgQ)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:expand-circle-filled",
	});
}

export default Component;
