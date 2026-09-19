import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcwwrwb5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcwwrwb5e"/>`,
		"fallback": "fa6-solid:circle-minus",
	});
}

export default Component;
