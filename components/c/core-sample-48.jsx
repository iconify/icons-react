import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5g_98bjs.css';
import '../../css/i/ibk4nlb7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5g_98bjs"/><path class="ibk4nlb7s"/>`,
		"fallback": "energy-icons:core-sample-48",
	});
}

export default Component;
