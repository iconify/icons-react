import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyf0sk1kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lyf0sk1kr"/>`,
		"fallback": "keyline-icons:badge-check-sharp-fill",
	});
}

export default Component;
