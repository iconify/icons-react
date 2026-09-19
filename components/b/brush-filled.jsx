import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8l-jmhst.css';
import '../../css/v/vqw6mobct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8l-jmhst"/><path class="vqw6mobct"/>`,
		"fallback": "boxicons:brush-filled",
	});
}

export default Component;
