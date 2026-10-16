import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpcjzhb8z.css';
import '../../css/i/in0d74b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpcjzhb8z"/><path class="in0d74b0s"/>`,
		"fallback": "energy-icons:grid-constraint-48",
	});
}

export default Component;
