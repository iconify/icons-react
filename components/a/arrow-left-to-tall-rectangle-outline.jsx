import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbwzb4byy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbwzb4byy"/>`,
		"fallback": "pinhead:arrow-left-to-tall-rectangle-outline",
	});
}

export default Component;
