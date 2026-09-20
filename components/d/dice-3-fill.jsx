import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi94q_tnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gi94q_tnd"/>`,
		"fallback": "keyline-icons:dice-3-fill",
	});
}

export default Component;
