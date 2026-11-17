import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq8y74bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq8y74bvn"/>`,
		"fallback": "lucide:chevrons-from-axis-horizontal",
	});
}

export default Component;
