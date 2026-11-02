import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdsr3dryb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdsr3dryb"/>`,
		"fallback": "mingcute:air-condition-open-line",
	});
}

export default Component;
