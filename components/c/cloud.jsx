import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aew577vyu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aew577vyu"/>`,
		"fallback": "dinkie-icons:cloud",
	});
}

export default Component;
