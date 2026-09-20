import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt5q-nbne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt5q-nbne"/>`,
		"fallback": "selfhst:apple-homekit-dark",
	});
}

export default Component;
