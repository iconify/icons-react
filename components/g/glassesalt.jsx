import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjyejd2yu.css';

const viewBox = {"width":1026,"height":769};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjyejd2yu"/>`,
		"fallback": "whh:glassesalt",
	});
}

export default Component;
