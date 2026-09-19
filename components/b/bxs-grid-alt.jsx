import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgjx7bwna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgjx7bwna"/>`,
		"fallback": "bx:bxs-grid-alt",
	});
}

export default Component;
