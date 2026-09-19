import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4b4ymh5n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4b4ymh5n"/>`,
		"fallback": "fa7-brands:creative-commons-zero",
	});
}

export default Component;
