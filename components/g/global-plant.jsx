import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0u9rabbb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n0u9rabbb"/>`,
		"fallback": "ix:global-plant",
	});
}

export default Component;
