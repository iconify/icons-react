import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u701hrb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u701hrb1w"/>`,
		"fallback": "mdi:email-edit",
	});
}

export default Component;
