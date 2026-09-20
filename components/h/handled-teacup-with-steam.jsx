import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co53okb_a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co53okb_a"/>`,
		"fallback": "pinhead:handled-teacup-with-steam",
	});
}

export default Component;
