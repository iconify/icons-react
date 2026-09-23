import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nin0wu0rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nin0wu0rp"/>`,
		"fallback": "keyline-icons:escape-two-tone",
	});
}

export default Component;
