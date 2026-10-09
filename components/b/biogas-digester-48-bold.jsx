import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe737fbnr.css';
import '../../css/q/qjfl8--kf.css';
import '../../css/u/u_0jnmbik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe737fbnr"/><path class="qjfl8--kf"/><path class="u_0jnmbik"/>`,
		"fallback": "energy-icons:biogas-digester-48-bold",
	});
}

export default Component;
