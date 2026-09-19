import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn5ynfb2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn5ynfb2y"/>`,
		"fallback": "fa-solid:cheese",
	});
}

export default Component;
