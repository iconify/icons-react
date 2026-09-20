import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r26qt7bfw.css';
import '../../css/d/dtlxifb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r26qt7bfw"/><path class="dtlxifb0m"/>`,
		"fallback": "streamline-ultimate:cloud-data-transfer-bold",
	});
}

export default Component;
