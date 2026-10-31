import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr3-7w_6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr3-7w_6u"/>`,
		"fallback": "coolicons:chevron-left-large-fill-round",
	});
}

export default Component;
