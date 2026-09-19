import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy9jjyb9o.css';
import '../../css/j/jvbg5sbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy9jjyb9o"/><path clip-rule="evenodd" class="jvbg5sbiq"/>`,
		"fallback": "bitcoin-icons:confirmations-2-filled",
	});
}

export default Component;
