import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp9sllmfa.css';
import '../../css/q/qoo-_6bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp9sllmfa"/><path class="qoo-_6bwm"/>`,
		"fallback": "streamline-freehand:business-product-supplier-1",
	});
}

export default Component;
