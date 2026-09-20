import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzc3ds05e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzc3ds05e"/>`,
		"fallback": "pinhead:cot-campsite",
	});
}

export default Component;
