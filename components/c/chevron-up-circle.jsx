import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro1fyrkqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ro1fyrkqk"/>`,
		"fallback": "majesticons:chevron-up-circle",
	});
}

export default Component;
