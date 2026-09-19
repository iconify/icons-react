import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp-an5bfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp-an5bfe"/>`,
		"fallback": "codex:h3",
	});
}

export default Component;
