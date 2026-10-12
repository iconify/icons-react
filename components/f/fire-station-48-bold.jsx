import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fui3mb06j.css';
import '../../css/z/zgffl4lji.css';
import '../../css/i/i_ixh4b2n.css';
import '../../css/t/t6015cucx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fui3mb06j"/><path class="zgffl4lji"/><path class="i_ixh4b2n"/><path class="t6015cucx"/>`,
		"fallback": "energy-icons:fire-station-48-bold",
	});
}

export default Component;
