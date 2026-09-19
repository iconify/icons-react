import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l17hfdciu.css';
import '../../css/d/dtwl1wjmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l17hfdciu"/><path class="dtwl1wjmx"/>`,
		"fallback": "boxicons:clipboard-x-filled",
	});
}

export default Component;
