import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzpivsatr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzpivsatr"/>`,
		"fallback": "f7:checkmark-square",
	});
}

export default Component;
