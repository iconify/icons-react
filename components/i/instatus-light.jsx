import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/g/gxkecnj9n.css';
import '../../css/k/klt6blsnp.css';
import '../../css/w/wmna4xjxd.css';

const viewBox = {"width":216,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGgKyaicsR)" class="ivjvz2eii"><path class="gxkecnj9n"/><path class="klt6blsnp"/></g><defs><clipPath id="SVGgKyaicsR"><path class="wmna4xjxd"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:instatus-light",
	});
}

export default Component;
