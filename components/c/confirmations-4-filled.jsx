import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulbs00b7h.css';
import '../../css/j/jvbg5sbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulbs00b7h"/><path clip-rule="evenodd" class="jvbg5sbiq"/>`,
		"fallback": "bitcoin-icons:confirmations-4-filled",
	});
}

export default Component;
