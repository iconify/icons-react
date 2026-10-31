import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhzi21-9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhzi21-9s"/>`,
		"fallback": "coolicons:brush-fill-round",
	});
}

export default Component;
