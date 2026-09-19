import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpslu009k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpslu009k"/>`,
		"fallback": "hugeicons:arrow-data-transfer-horizontal",
	});
}

export default Component;
