import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmuh9obmz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmuh9obmz"/>`,
		"fallback": "qlementine-icons:circle-filled-16",
	});
}

export default Component;
