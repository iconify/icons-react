import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbxo19bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbxo19bgx"/>`,
		"fallback": "hugeicons:bar-chart-horizontal",
	});
}

export default Component;
