import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjqfg2e1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjqfg2e1d"/>`,
		"fallback": "mingcute:exit-fill",
	});
}

export default Component;
