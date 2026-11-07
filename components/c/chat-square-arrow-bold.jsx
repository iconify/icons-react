import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjp174btb.css';
import '../../css/f/fhnwp1bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjp174btb"/><path class="fhnwp1bnf"/>`,
		"fallback": "solar:chat-square-arrow-bold",
	});
}

export default Component;
