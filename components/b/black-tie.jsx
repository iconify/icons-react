import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxvss3i8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxvss3i8m"/>`,
		"fallback": "la:black-tie",
	});
}

export default Component;
