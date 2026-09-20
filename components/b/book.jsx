import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0n_0r0ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0n_0r0ph"/>`,
		"fallback": "tabler:book",
	});
}

export default Component;
