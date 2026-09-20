import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5w8bpbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5w8bpbqi"/>`,
		"fallback": "mdi:format-rotate-ninety",
	});
}

export default Component;
