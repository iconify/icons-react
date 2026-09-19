import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq_0qxfmx.css';
import '../../css/y/yu51uzbyf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq_0qxfmx"/><path class="yu51uzbyf"/>`,
		"fallback": "flat-color-icons:broken-link",
	});
}

export default Component;
