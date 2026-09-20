import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbru06b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbru06b6j"/>`,
		"fallback": "keyline-icons:circle-chevron-left-fill",
	});
}

export default Component;
