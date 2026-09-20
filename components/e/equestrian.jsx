import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euemq852e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euemq852e"/>`,
		"fallback": "mdi:equestrian",
	});
}

export default Component;
