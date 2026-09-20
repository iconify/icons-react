import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8ye9bceb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8ye9bceb"/>`,
		"fallback": "keyline-icons:circle-arrow-up-fill",
	});
}

export default Component;
