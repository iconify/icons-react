import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh0-akcec.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh0-akcec"/>`,
		"fallback": "dinkie-icons:calendar-alt",
	});
}

export default Component;
