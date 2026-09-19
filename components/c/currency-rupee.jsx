import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdc_7m84r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdc_7m84r"/>`,
		"fallback": "heroicons-outline:currency-rupee",
	});
}

export default Component;
