import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8buf-dlb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8buf-dlb"/>`,
		"fallback": "fa6-regular:face-sad-tear",
	});
}

export default Component;
