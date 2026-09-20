import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6cqwsbin.css';
import '../../css/b/bfi2tqb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6cqwsbin"/><path class="bfi2tqb_g"/>`,
		"fallback": "streamline-ultimate:email-action-subtract-bold",
	});
}

export default Component;
