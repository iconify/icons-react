import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_v0l2tzx.css';
import '../../css/z/z3zho9lws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_v0l2tzx"/><path class="z3zho9lws"/>`,
		"fallback": "energy-icons:battery-bolt-48",
	});
}

export default Component;
