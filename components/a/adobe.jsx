import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inxc_cc_c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inxc_cc_c"/>`,
		"fallback": "cib:adobe",
	});
}

export default Component;
