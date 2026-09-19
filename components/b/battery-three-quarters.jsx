import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn36qn67e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn36qn67e"/>`,
		"fallback": "fa7-solid:battery-three-quarters",
	});
}

export default Component;
