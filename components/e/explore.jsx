import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyx_v3onx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyx_v3onx"/>`,
		"fallback": "zondicons:explore",
	});
}

export default Component;
