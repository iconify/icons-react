import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbkwmk22y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbkwmk22y"/>`,
		"fallback": "mdi:house-floor-basement",
	});
}

export default Component;
