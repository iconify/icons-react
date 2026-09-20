import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/r/r2i4hcc4h.css';
import '../../css/r/r-luteblc.css';
import '../../css/c/czfe36bit.css';
import '../../css/r/rb_ywng4r.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGHtaLFefJ"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="r2i4hcc4h"/><path class="r-luteblc"/><path class="czfe36bit"/><path class="rb_ywng4r"/></g></mask></defs><circle mask="url(#SVGHtaLFefJ)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:angle-left-circle-filled",
	});
}

export default Component;
