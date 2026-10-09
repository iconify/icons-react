import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_i86cclf.css';
import '../../css/a/an8j9_bzq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_i86cclf"/><path class="an8j9_bzq"/>`,
		"fallback": "energy-icons:forward-48-bold",
	});
}

export default Component;
