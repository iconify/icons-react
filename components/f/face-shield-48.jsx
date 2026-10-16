import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-z7esbav.css';
import '../../css/x/xpsvsqb_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-z7esbav"/><path class="xpsvsqb_r"/>`,
		"fallback": "energy-icons:face-shield-48",
	});
}

export default Component;
