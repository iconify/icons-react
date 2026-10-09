import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h09i3hbzu.css';
import '../../css/q/q_dqg26dw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h09i3hbzu"/><path class="q_dqg26dw"/>`,
		"fallback": "energy-icons:chevrons-left-48",
	});
}

export default Component;
