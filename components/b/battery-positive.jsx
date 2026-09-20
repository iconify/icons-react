import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w27wi4ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w27wi4ben"/>`,
		"fallback": "mdi:battery-positive",
	});
}

export default Component;
