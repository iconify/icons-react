import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddr_3pbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddr_3pbvw"/>`,
		"fallback": "mingcute:align-justify-fill",
	});
}

export default Component;
