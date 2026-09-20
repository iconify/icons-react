import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx8kdibid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx8kdibid"/>`,
		"fallback": "keyline-icons:chevron-right-two-tone",
	});
}

export default Component;
