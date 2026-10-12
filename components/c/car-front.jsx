import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhslpv6_n.css';
import '../../css/s/sfive3nuu.css';
import '../../css/z/zis_tnbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uhslpv6_n"/><path class="sfive3nuu"/><path class="zis_tnbmx"/></g>`,
		"fallback": "andrsrxn:car-front",
	});
}

export default Component;
