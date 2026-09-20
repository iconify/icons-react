import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnovhgbzb.css';
import '../../css/f/f-uqiuafs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnovhgbzb"/><path class="f-uqiuafs"/>`,
		"fallback": "vaadin:compress-square",
	});
}

export default Component;
