import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzj6jnmej.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kzj6jnmej"/><circle class="snpiwsb_l"/>`,
		"fallback": "openmoji:green-circle",
	});
}

export default Component;
