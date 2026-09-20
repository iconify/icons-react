import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vupozobcn.css';
import '../../css/z/zhuxdlbfr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vupozobcn"/><path class="zhuxdlbfr"/>`,
		"fallback": "vaadin:folder-remove",
	});
}

export default Component;
