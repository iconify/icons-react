import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4hsm_bxh.css';
import '../../css/j/j51w7z-wj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4hsm_bxh"/><path class="j51w7z-wj"/>`,
		"fallback": "vaadin:chevron-circle-down-o",
	});
}

export default Component;
