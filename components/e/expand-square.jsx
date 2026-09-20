import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbxme9fqn.css';
import '../../css/w/wi8y19aeg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbxme9fqn"/><path class="wi8y19aeg"/>`,
		"fallback": "vaadin:expand-square",
	});
}

export default Component;
