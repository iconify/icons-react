import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbio5miff.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbio5miff"/>`,
		"fallback": "fa6-solid:bridge-lock",
	});
}

export default Component;
