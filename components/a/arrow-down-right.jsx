import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upbi2ob9v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upbi2ob9v"/>`,
		"fallback": "f7:arrow-down-right",
	});
}

export default Component;
