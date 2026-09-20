import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us55ghb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us55ghb4b"/>`,
		"fallback": "mdi:door-sliding",
	});
}

export default Component;
