import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-bp_jbwf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-bp_jbwf"/>`,
		"fallback": "healthicons:bone-long-outline",
	});
}

export default Component;
