import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if5c0vbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if5c0vbwg"/>`,
		"fallback": "tabler:flag-plus",
	});
}

export default Component;
