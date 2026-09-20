import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4-u_bchg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4-u_bchg"/>`,
		"fallback": "streamline-freehand:cloud-phone-exchange",
	});
}

export default Component;
