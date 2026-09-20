import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eirz4gl8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eirz4gl8o"/>`,
		"fallback": "keyline-icons:arrow-u-turn-right-fill",
	});
}

export default Component;
