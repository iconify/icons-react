import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-f5jnbcl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-f5jnbcl"/>`,
		"fallback": "ix:editor-grid-none",
	});
}

export default Component;
