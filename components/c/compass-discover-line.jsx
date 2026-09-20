import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmcm3dd5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmcm3dd5a"/>`,
		"fallback": "ri:compass-discover-line",
	});
}

export default Component;
