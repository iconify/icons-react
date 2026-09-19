import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/let3ambub.css';

const viewBox = {"width":2368,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="let3ambub"/>`,
		"fallback": "vs:bc-card",
	});
}

export default Component;
