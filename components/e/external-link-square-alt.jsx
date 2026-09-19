import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtc58_b-t.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtc58_b-t"/>`,
		"fallback": "fa-solid:external-link-square-alt",
	});
}

export default Component;
