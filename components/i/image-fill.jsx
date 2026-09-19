import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n90k4bjti.css';
import '../../css/f/fzhx4wbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n90k4bjti"/><circle class="fzhx4wbsy"/>`,
		"fallback": "eva:image-fill",
	});
}

export default Component;
