import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmoq_m65p.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmoq_m65p"/>`,
		"fallback": "memory:box-light-double-down-left",
	});
}

export default Component;
