import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbe2gqb6b.css';
import '../../css/f/fn_f7s4pj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbe2gqb6b"/><path class="fn_f7s4pj"/>`,
		"fallback": "energy-icons:gas-compressor-48",
	});
}

export default Component;
