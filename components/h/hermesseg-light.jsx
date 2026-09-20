import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu-jtebze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu-jtebze"/>`,
		"fallback": "selfhst:hermesseg-light",
	});
}

export default Component;
