import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlusl2c1l.css';
import '../../css/v/v1u1ysozk.css';
import '../../css/j/jwidh_pae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlusl2c1l"/><path class="v1u1ysozk"/><path class="jwidh_pae"/>`,
		"fallback": "energy-icons:fuel-gauge-48",
	});
}

export default Component;
