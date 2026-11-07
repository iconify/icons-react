import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4b_ewb5v.css';
import '../../css/l/llk64db4t.css';
import '../../css/t/t000zacqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4b_ewb5v"/><path class="llk64db4t"/><path clip-rule="evenodd" class="t000zacqg"/>`,
		"fallback": "solar:chat-round-quote-bold",
	});
}

export default Component;
