import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyymnv7_v.css';
import '../../css/f/fha2em57a.css';
import '../../css/c/c5cjyruta.css';
import '../../css/o/od-9jmg4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyymnv7_v"/><path class="fha2em57a"/><rect transform="matrix(0 -1 -1 0 16 16)" class="c5cjyruta"/><path class="od-9jmg4o"/></g>`,
		"fallback": "andrsrxn:bring-to-front",
	});
}

export default Component;
