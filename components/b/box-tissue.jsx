import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd-g8ob1i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd-g8ob1i"/>`,
		"fallback": "fa7-solid:box-tissue",
	});
}

export default Component;
