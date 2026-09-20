import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvgij0b_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvgij0b_x"/>`,
		"fallback": "qlementine-icons:circle-16",
	});
}

export default Component;
