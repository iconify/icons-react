import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxawrmb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxawrmb7c"/>`,
		"fallback": "tabler:circle-chevron-up-filled",
	});
}

export default Component;
