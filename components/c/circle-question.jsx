import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqyr3mqxz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqyr3mqxz"/>`,
		"fallback": "fa6-solid:circle-question",
	});
}

export default Component;
