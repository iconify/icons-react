import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c14t5ib6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c14t5ib6h"/>`,
		"fallback": "keyline-icons:euro-two-tone",
	});
}

export default Component;
