import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpilv4b3p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpilv4b3p"/>`,
		"fallback": "heroicons-solid:emoji-happy",
	});
}

export default Component;
