import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha0nppz8t.css';
import '../../css/h/hhk88wzsr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha0nppz8t"/><path class="hhk88wzsr"/>`,
		"fallback": "vaadin:file-text",
	});
}

export default Component;
