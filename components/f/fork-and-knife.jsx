import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr13y7_yy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr13y7_yy"/>`,
		"fallback": "dinkie-icons:fork-and-knife",
	});
}

export default Component;
