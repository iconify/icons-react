import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwduy1bns.css';
import '../../css/k/kuz80_b7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwduy1bns"/><path class="kuz80_b7w"/>`,
		"fallback": "energy-icons:bold-48-bold",
	});
}

export default Component;
