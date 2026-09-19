import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otved71qv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otved71qv"/>`,
		"fallback": "heroicons-outline:arrow-up-tray",
	});
}

export default Component;
