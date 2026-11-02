import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/remfnhs2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="remfnhs2x"/>`,
		"fallback": "mingcute:bell-minus-fill",
	});
}

export default Component;
