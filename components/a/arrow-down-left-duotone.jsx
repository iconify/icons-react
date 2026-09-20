import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4xj07b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4xj07b2p"/>`,
		"fallback": "keyline-icons:arrow-down-left-duotone",
	});
}

export default Component;
