import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk-do6bac.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk-do6bac"/>`,
		"fallback": "pinhead:arrow-down-above-arrow-right-beside-arrow-left-above-arrow-up",
	});
}

export default Component;
