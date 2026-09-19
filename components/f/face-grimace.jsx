import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1lj5vbdz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1lj5vbdz"/>`,
		"fallback": "fa6-regular:face-grimace",
	});
}

export default Component;
