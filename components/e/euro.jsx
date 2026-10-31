import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ejmwdojph.css';
import '../../css/p/piqpuwbju.css';
import '../../css/w/w0nlbv9qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ejmwdojph wm-shadow"/><path class="piqpuwbju wm-shadow"/><path class="w0nlbv9qm"/></g>`,
		"fallback": "withicons-brutal:euro",
	});
}

export default Component;
