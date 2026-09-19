import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg_0y-dzp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg_0y-dzp"/>`,
		"fallback": "at-icons:feather",
	});
}

export default Component;
