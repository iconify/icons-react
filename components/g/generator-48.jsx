import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0413yb0o.css';
import '../../css/z/z_jrvqbbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0413yb0o"/><path class="z_jrvqbbm"/>`,
		"fallback": "energy-icons:generator-48",
	});
}

export default Component;
