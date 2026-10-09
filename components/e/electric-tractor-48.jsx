import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3k9_ypge.css';
import '../../css/q/q_ao3jb5h.css';
import '../../css/q/qjx-16ssr.css';
import '../../css/i/i1g66_y5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3k9_ypge"/><path class="q_ao3jb5h"/><path class="qjx-16ssr"/><path class="i1g66_y5w"/>`,
		"fallback": "energy-icons:electric-tractor-48",
	});
}

export default Component;
