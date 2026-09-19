import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty9awnngf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty9awnngf"/>`,
		"fallback": "fa-solid:book",
	});
}

export default Component;
