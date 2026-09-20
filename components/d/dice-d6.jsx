import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjjpdpq7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjjpdpq7p"/>`,
		"fallback": "mdi:dice-d6",
	});
}

export default Component;
