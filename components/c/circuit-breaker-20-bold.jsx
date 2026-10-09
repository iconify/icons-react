import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzpjlsbtf.css';
import '../../css/g/gksydibqx.css';
import '../../css/q/qpu6gyb-m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzpjlsbtf"/><path class="gksydibqx"/><path class="qpu6gyb-m"/>`,
		"fallback": "energy-icons:circuit-breaker-20-bold",
	});
}

export default Component;
