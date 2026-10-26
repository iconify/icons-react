import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0b-rwb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0b-rwb6k"/>`,
		"fallback": "cbi:co2",
	});
}

export default Component;
