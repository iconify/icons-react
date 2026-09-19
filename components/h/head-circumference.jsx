import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd4wc4bhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd4wc4bhx"/>`,
		"fallback": "healthicons:head-circumference",
	});
}

export default Component;
