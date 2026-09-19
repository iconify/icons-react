import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrtzwyj8v.css';
import '../../css/i/iiwuq1b9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrtzwyj8v"/><path class="iiwuq1b9e"/>`,
		"fallback": "carbon:folder-add",
	});
}

export default Component;
