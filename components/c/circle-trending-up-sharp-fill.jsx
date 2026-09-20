import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_3l2v-ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_3l2v-ws"/>`,
		"fallback": "keyline-icons:circle-trending-up-sharp-fill",
	});
}

export default Component;
