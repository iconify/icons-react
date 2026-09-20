import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm8mx7q9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm8mx7q9t"/>`,
		"fallback": "mdi:briefcase-check-outline",
	});
}

export default Component;
