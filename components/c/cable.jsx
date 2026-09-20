import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo43c5u5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo43c5u5t"/>`,
		"fallback": "keyline-icons:cable",
	});
}

export default Component;
