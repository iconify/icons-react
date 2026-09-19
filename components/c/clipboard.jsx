import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ailzqs9ba.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clsa-9bqs.css';
import '../../css/l/lcvnx1bva.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="iconify-CgctXtuA" class="ailzqs9ba"/></defs><g class="ft5dv1b6b"><path class="clsa-9bqs"/><use href="#iconify-CgctXtuA"/><path clip-rule="evenodd" class="lcvnx1bva"/><use href="#iconify-CgctXtuA"/></g>`,
		"fallback": "pepicons:clipboard",
	});
}

export default Component;
