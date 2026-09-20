import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa9u5v4ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa9u5v4ut"/>`,
		"fallback": "keyline-icons:arrow-down-narrow-wide-fill",
	});
}

export default Component;
