import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7p52cbfs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7p52cbfs"/>`,
		"fallback": "dinkie-icons:black-right-triangle-with-double-vertical-bar",
	});
}

export default Component;
