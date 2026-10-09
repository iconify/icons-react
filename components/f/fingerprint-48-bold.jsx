import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl_b26bzx.css';
import '../../css/o/oewx-qbfa.css';
import '../../css/m/mzed39b7d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl_b26bzx"/><path class="oewx-qbfa"/><path class="mzed39b7d"/>`,
		"fallback": "energy-icons:fingerprint-48-bold",
	});
}

export default Component;
