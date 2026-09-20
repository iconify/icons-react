import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upt1lebwm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upt1lebwm"/>`,
		"fallback": "lsicon:folder-files-outline",
	});
}

export default Component;
