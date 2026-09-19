import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz12mvlvv.css';
import '../../css/x/xnrsw1b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz12mvlvv"/><path class="xnrsw1b2z"/>`,
		"fallback": "boxicons:fish-alt",
	});
}

export default Component;
