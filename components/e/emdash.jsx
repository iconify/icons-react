import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik_ga42_a.css';

const viewBox = {"width":643,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik_ga42_a"/>`,
		"fallback": "ls:emdash",
	});
}

export default Component;
