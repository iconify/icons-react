import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deo_cme6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deo_cme6j"/>`,
		"fallback": "mingcute:clock-x-line",
	});
}

export default Component;
