import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w54u5nbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w54u5nbqp"/>`,
		"fallback": "lucide:arrow-left-to-line",
	});
}

export default Component;
