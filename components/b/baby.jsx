import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_no2n83c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_no2n83c"/>`,
		"fallback": "fa7-solid:baby",
	});
}

export default Component;
