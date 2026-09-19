import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clx1tcc9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clx1tcc9n"/>`,
		"fallback": "fa6-solid:briefcase-medical",
	});
}

export default Component;
