import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv8o2ibxb.css';
import '../../css/q/qkmfhjfvj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv8o2ibxb"/><path class="qkmfhjfvj"/>`,
		"fallback": "vaadin:file-process",
	});
}

export default Component;
