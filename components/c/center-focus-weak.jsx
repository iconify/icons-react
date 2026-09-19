import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id_2uy04o.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id_2uy04o"/>`,
		"fallback": "zmdi:center-focus-weak",
	});
}

export default Component;
