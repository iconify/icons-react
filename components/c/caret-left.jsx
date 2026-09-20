import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw9msv4zk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw9msv4zk"/>`,
		"fallback": "vaadin:caret-left",
	});
}

export default Component;
