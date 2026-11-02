import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkfgwd01j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkfgwd01j"/>`,
		"fallback": "mingcute:cherry-fill",
	});
}

export default Component;
