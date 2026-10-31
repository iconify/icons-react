import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osl8gwbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osl8gwbsk"/>`,
		"fallback": "coolicons:drag-horizontal-duocolor-round",
	});
}

export default Component;
