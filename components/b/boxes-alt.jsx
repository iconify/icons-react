import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbki43btx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbki43btx"/>`,
		"fallback": "fa7-solid:boxes-alt",
	});
}

export default Component;
