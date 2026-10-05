import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y55p0-byc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y55p0-byc"/>`,
		"fallback": "pinhead:bear-and-question-mark",
	});
}

export default Component;
