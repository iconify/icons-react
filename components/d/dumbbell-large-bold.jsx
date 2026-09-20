import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzl577bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzl577bvm"/>`,
		"fallback": "solar:dumbbell-large-bold",
	});
}

export default Component;
