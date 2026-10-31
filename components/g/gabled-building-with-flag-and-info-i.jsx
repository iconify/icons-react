import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx3qwj2_b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx3qwj2_b"/>`,
		"fallback": "pinhead:gabled-building-with-flag-and-info-i",
	});
}

export default Component;
