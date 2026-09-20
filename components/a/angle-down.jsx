import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcs96yn7y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcs96yn7y"/>`,
		"fallback": "vaadin:angle-down",
	});
}

export default Component;
