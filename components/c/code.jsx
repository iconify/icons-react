import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z77a4lcrl.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z77a4lcrl"/>`,
		"fallback": "fa-solid:code",
	});
}

export default Component;
