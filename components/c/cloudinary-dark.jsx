import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqdbg6btl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqdbg6btl"/>`,
		"fallback": "selfhst:cloudinary-dark",
	});
}

export default Component;
