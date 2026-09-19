import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa740y-ni.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wa740y-ni"/>`,
		"fallback": "heroicons-solid:chat-bubble-bottom-center-text",
	});
}

export default Component;
