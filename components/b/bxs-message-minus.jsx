import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_hn9_sif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_hn9_sif"/>`,
		"fallback": "bx:bxs-message-minus",
	});
}

export default Component;
