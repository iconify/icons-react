import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1zbnl2gi.css';
import '../../css/u/u_65e3bqj.css';
import '../../css/l/ld-zmgngl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1zbnl2gi"/><path class="u_65e3bqj"/><path class="ld-zmgngl"/>`,
		"fallback": "energy-icons:earthing-switch-48-bold",
	});
}

export default Component;
