import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moxwz9eot.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moxwz9eot"/>`,
		"fallback": "qlementine-icons:check-tick-12",
	});
}

export default Component;
