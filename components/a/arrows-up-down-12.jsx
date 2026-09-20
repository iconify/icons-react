import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0hhc3b9v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0hhc3b9v"/>`,
		"fallback": "qlementine-icons:arrows-up-down-12",
	});
}

export default Component;
