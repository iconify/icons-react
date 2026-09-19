import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx8wksbhm.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx8wksbhm"/>`,
		"fallback": "fa6-solid:computer-mouse",
	});
}

export default Component;
