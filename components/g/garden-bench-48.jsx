import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyrr7ohpi.css';
import '../../css/v/v_nw6fb-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyrr7ohpi"/><path class="v_nw6fb-s"/>`,
		"fallback": "energy-icons:garden-bench-48",
	});
}

export default Component;
