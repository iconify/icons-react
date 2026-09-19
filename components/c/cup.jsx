import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3bj926tj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3bj926tj"/>`,
		"fallback": "entypo:cup",
	});
}

export default Component;
