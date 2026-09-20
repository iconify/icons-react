import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tux-veb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tux-veb3o"/>`,
		"fallback": "tabler:circle-dashed",
	});
}

export default Component;
