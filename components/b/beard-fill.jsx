import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnt80_bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnt80_bcn"/>`,
		"fallback": "mingcute:beard-fill",
	});
}

export default Component;
