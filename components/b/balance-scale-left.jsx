import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynjhpt15y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynjhpt15y"/>`,
		"fallback": "fa7-solid:balance-scale-left",
	});
}

export default Component;
