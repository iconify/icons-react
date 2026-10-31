import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txnr8nb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txnr8nb1s"/>`,
		"fallback": "coolicons:arrow-big-right-fill-round",
	});
}

export default Component;
