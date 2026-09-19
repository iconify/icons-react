import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y62_a_dty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y62_a_dty"/>`,
		"fallback": "fa-brands:fort-awesome-alt",
	});
}

export default Component;
