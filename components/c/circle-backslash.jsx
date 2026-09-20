import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2c55hbbe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2c55hbbe"/>`,
		"fallback": "radix-icons:circle-backslash",
	});
}

export default Component;
