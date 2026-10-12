import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnt86abll.css';
import '../../css/e/ehlz8obmy.css';
import '../../css/f/fahlc6baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gnt86abll"/><rect transform="rotate(90 0 21.35)scale(-1 1)" class="ehlz8obmy"/><path class="fahlc6baj"/></g>`,
		"fallback": "andrsrxn:album",
	});
}

export default Component;
