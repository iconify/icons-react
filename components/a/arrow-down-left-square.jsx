import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evgd5di7e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evgd5di7e"/>`,
		"fallback": "f7:arrow-down-left-square",
	});
}

export default Component;
