import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvwsup27g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvwsup27g"/>`,
		"fallback": "dinkie-icons:hourglass-with-flowing-sand",
	});
}

export default Component;
