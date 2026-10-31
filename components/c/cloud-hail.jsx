import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l1cpr8bjj.css';
import '../../css/k/k1pmlf02a.css';
import '../../css/n/n1y1i5mpe.css';
import '../../css/o/o2n2poguz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="l1cpr8bjj wm-shadow"/><path class="k1pmlf02a wm-shadow"/><path class="n1y1i5mpe"/><path class="o2n2poguz"/></g>`,
		"fallback": "withicons-brutal:cloud-hail",
	});
}

export default Component;
