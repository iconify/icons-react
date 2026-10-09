import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v26w1ttai.css';
import '../../css/h/hbqtujzwn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v26w1ttai"/><path class="hbqtujzwn"/>`,
		"fallback": "energy-icons:fries-48-bold",
	});
}

export default Component;
