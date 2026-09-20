import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6plrxovz.css';
import '../../css/o/o8euiibbt.css';
import '../../css/g/g7qf7cb_o.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n-c6of2tv.css';
import '../../css/o/otqin9rdr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6plrxovz"/><path class="o8euiibbt"/><path class="g7qf7cb_o"/><g class="jn8qy4bru"><path class="n-c6of2tv"/><path class="otqin9rdr"/></g>`,
		"fallback": "openmoji:battery",
	});
}

export default Component;
