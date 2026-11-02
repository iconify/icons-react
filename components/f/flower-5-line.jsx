import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo3w5zbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo3w5zbpd"/>`,
		"fallback": "mingcute:flower-5-line",
	});
}

export default Component;
