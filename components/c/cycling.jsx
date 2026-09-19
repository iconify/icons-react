import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn0amruit.css';
import '../../css/w/w2fc8uq2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn0amruit"/><path class="w2fc8uq2i"/>`,
		"fallback": "boxicons:cycling",
	});
}

export default Component;
