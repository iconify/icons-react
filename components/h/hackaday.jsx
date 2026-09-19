import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oue1_lxyl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oue1_lxyl"/>`,
		"fallback": "cib:hackaday",
	});
}

export default Component;
