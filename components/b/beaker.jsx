import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygjv6qutr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygjv6qutr"/>`,
		"fallback": "dinkie-icons:beaker",
	});
}

export default Component;
