import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bizf7qbor.css';
import '../../css/h/heochxbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bizf7qbor"/><path clip-rule="evenodd" class="heochxbce"/>`,
		"fallback": "cuida:arrow-down-outline",
	});
}

export default Component;
