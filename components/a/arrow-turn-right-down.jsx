import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o124r16ml.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o124r16ml"/>`,
		"fallback": "f7:arrow-turn-right-down",
	});
}

export default Component;
