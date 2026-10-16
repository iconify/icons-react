import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xedufpf4g.css';
import '../../css/j/j3e-87b3r.css';
import '../../css/i/imoeebb7h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xedufpf4g"/><path class="j3e-87b3r"/><path class="imoeebb7h"/>`,
		"fallback": "energy-icons:emissions-trading-48",
	});
}

export default Component;
