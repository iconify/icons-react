import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chkf3ns7x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chkf3ns7x"/>`,
		"fallback": "fa7-solid:circle-stop",
	});
}

export default Component;
