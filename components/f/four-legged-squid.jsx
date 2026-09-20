import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgxb__bke.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgxb__bke"/>`,
		"fallback": "pinhead:four-legged-squid",
	});
}

export default Component;
