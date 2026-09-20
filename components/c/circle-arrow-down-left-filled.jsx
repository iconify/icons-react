import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldopy_b1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldopy_b1y"/>`,
		"fallback": "tabler:circle-arrow-down-left-filled",
	});
}

export default Component;
