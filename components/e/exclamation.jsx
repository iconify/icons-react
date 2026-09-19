import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vad9-vkwg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vad9-vkwg"/>`,
		"fallback": "heroicons-solid:exclamation",
	});
}

export default Component;
