import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7mb3_b4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v7mb3_b4q"/>`,
		"fallback": "healthicons:heartbeat-outline",
	});
}

export default Component;
