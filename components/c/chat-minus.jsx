import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orf635bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orf635bcf"/>`,
		"fallback": "mdi:chat-minus",
	});
}

export default Component;
