import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7nqbbw5k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7nqbbw5k"/>`,
		"fallback": "devicon:datadog",
	});
}

export default Component;
