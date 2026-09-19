import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh2vge6it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh2vge6it"/>`,
		"fallback": "boxicons:dna-filled",
	});
}

export default Component;
