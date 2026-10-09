import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw5w10zib.css';
import '../../css/s/s5u-maceu.css';
import '../../css/q/qkc80i2jm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw5w10zib"/><path class="s5u-maceu"/><path class="qkc80i2jm"/>`,
		"fallback": "energy-icons:hydro-turbine-48",
	});
}

export default Component;
