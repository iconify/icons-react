import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/porg_drgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="porg_drgx"/>`,
		"fallback": "mingcute:clipboard-line",
	});
}

export default Component;
