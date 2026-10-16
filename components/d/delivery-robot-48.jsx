import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-rt1kbiq.css';
import '../../css/m/msqhepy4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-rt1kbiq"/><path class="msqhepy4s"/>`,
		"fallback": "energy-icons:delivery-robot-48",
	});
}

export default Component;
