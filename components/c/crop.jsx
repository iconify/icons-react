import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxl344bvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxl344bvz"/>`,
		"fallback": "ps:crop",
	});
}

export default Component;
