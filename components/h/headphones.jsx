import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t6msj_99i.css';
import '../../css/o/omw6tjsqe.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t6msj_99i"/><path class="omw6tjsqe"/></g>`,
		"fallback": "fad:headphones",
	});
}

export default Component;
