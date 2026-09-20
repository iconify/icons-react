import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2os41gof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2os41gof"/>`,
		"fallback": "qlementine-icons:blocks-16",
	});
}

export default Component;
