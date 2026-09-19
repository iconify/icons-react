import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqb5x87ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqb5x87ld"/>`,
		"fallback": "cbi:hue-spot-v2",
	});
}

export default Component;
