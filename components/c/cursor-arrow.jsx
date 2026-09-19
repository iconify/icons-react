import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhpea7kvp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhpea7kvp"/>`,
		"fallback": "dinkie-icons:cursor-arrow",
	});
}

export default Component;
