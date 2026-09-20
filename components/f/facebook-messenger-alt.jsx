import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px1bfwbyg.css';
import '../../css/x/xblgcabps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px1bfwbyg"/><path class="xblgcabps"/>`,
		"fallback": "uim:facebook-messenger-alt",
	});
}

export default Component;
