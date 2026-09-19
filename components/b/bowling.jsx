import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek-wxnthc.css';
import '../../css/j/j-tdi7bib.css';
import '../../css/p/pre-thz9w.css';
import '../../css/y/y9cl-l_4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek-wxnthc"/><circle class="j-tdi7bib"/><circle class="pre-thz9w"/><circle class="y9cl-l_4z"/>`,
		"fallback": "cil:bowling",
	});
}

export default Component;
