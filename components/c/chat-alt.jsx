import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e__idhb9d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e__idhb9d"/>`,
		"fallback": "marketeq:chat-alt",
	});
}

export default Component;
