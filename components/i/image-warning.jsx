import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh5gj2bwp.css';
import '../../css/s/sbmjpxosh.css';
import '../../css/g/g754u6bco.css';
import '../../css/t/tfg5epb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kh5gj2bwp"/><path class="sbmjpxosh"/><path class="g754u6bco"/><path class="tfg5epb5m"/></g>`,
		"fallback": "andrsrxn:image-warning",
	});
}

export default Component;
