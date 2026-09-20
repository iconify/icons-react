import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmn1gik9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmn1gik9i"/>`,
		"fallback": "mdi:floor-light-outline",
	});
}

export default Component;
