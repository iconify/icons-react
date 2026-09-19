import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5nx49f4t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5nx49f4t"/>`,
		"fallback": "fa7-solid:box",
	});
}

export default Component;
