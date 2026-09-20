import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tswgzy9an.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tswgzy9an"/>`,
		"fallback": "pinhead:bear-spray-can-with-spray-and-dollar",
	});
}

export default Component;
