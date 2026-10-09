import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmy2czeki.css';
import '../../css/o/oo8c23mgb.css';
import '../../css/w/w94q1qbjf.css';
import '../../css/k/kto--z_xb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmy2czeki"/><path class="oo8c23mgb"/><path class="w94q1qbjf"/><path class="kto--z_xb"/>`,
		"fallback": "energy-icons:compressed-air-48",
	});
}

export default Component;
