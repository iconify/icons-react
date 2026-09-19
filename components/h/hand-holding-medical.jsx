import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2iz5la8l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2iz5la8l"/>`,
		"fallback": "fa7-solid:hand-holding-medical",
	});
}

export default Component;
