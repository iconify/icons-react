import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7w0j0b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7w0j0b5o"/>`,
		"fallback": "cbi:desk-lamp",
	});
}

export default Component;
