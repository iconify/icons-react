import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g36nsd2ec.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g36nsd2ec"/>`,
		"fallback": "fa6-solid:book-tanakh",
	});
}

export default Component;
