import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sxalv7b1j.css';
import '../../css/k/k4w6yu4dg.css';
import '../../css/o/o5cxoybka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sxalv7b1j"/><path class="k4w6yu4dg"/><path class="o5cxoybka"/></g>`,
		"fallback": "solar:alarm-bold",
	});
}

export default Component;
