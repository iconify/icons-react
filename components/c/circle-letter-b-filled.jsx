import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9dhk5b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9dhk5b-h"/>`,
		"fallback": "tabler:circle-letter-b-filled",
	});
}

export default Component;
