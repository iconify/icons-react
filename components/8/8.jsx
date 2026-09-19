import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx293rnkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vx293rnkj"/>`,
		"fallback": "healthicons:8",
	});
}

export default Component;
