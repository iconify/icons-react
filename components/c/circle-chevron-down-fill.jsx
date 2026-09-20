import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh10_4bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh10_4bfa"/>`,
		"fallback": "keyline-icons:circle-chevron-down-fill",
	});
}

export default Component;
