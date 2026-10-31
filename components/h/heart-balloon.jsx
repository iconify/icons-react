import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kua0webro.css';
import '../../css/o/o7vw13bdp.css';
import '../../css/s/sczesx71k.css';
import '../../css/t/t04gblboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kua0webro wm-shadow"/><path class="o7vw13bdp wm-shadow"/><path class="sczesx71k"/><path class="t04gblboz"/></g>`,
		"fallback": "withicons-brutal:heart-balloon",
	});
}

export default Component;
