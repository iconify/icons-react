import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhvv3ymup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhvv3ymup"/>`,
		"fallback": "keyline-icons:arrow-down-right-two-tone",
	});
}

export default Component;
