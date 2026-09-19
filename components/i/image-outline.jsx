import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h909b4b3w.css';
import '../../css/f/fzhx4wbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h909b4b3w"/><circle class="fzhx4wbsy"/>`,
		"fallback": "eva:image-outline",
	});
}

export default Component;
