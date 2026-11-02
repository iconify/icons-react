import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvmb6gb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvmb6gb4b"/>`,
		"fallback": "mingcute:delete-back-fill",
	});
}

export default Component;
