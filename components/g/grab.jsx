import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeq1y5_1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeq1y5_1c"/>`,
		"fallback": "game-icons:grab",
	});
}

export default Component;
