import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sktthrbsc.css';
import '../../css/c/cxl-8rb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sktthrbsc"/><path class="cxl-8rb_d"/>`,
		"fallback": "mage:contact-book-fill",
	});
}

export default Component;
