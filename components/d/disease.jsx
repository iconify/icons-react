import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imvhqx18h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imvhqx18h"/>`,
		"fallback": "fa-solid:disease",
	});
}

export default Component;
