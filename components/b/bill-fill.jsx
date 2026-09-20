import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb9nnwb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb9nnwb9w"/>`,
		"fallback": "ri:bill-fill",
	});
}

export default Component;
