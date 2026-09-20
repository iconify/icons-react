import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9kuzwb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9kuzwb0h"/>`,
		"fallback": "tabler:circle-dotted-letter-h",
	});
}

export default Component;
