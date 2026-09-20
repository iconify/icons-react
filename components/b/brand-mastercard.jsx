import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lrtv4u-dn.css';
import '../../css/i/i4da12bea.css';
import '../../css/h/h38z5cbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lrtv4u-dn"/><path class="i4da12bea"/><path class="h38z5cbna"/></g>`,
		"fallback": "tabler:brand-mastercard",
	});
}

export default Component;
