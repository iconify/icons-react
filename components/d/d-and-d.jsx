import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_ksh4r_l.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_ksh4r_l"/>`,
		"fallback": "fa-brands:d-and-d",
	});
}

export default Component;
