import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg7q3o5tc.css';
import '../../css/y/y6xsb0p_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg7q3o5tc"/><path class="y6xsb0p_q"/>`,
		"fallback": "energy-icons:bus-48",
	});
}

export default Component;
