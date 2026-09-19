import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew1hd7bhz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew1hd7bhz"/>`,
		"fallback": "fa-solid:birthday-cake",
	});
}

export default Component;
