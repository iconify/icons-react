import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcxdhb84c.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcxdhb84c"/>`,
		"fallback": "f7:antenna-radiowaves-left-right",
	});
}

export default Component;
