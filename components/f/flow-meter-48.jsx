import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5e3kibxu.css';
import '../../css/d/d2h5byb5d.css';
import '../../css/p/pqlptybrj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5e3kibxu"/><path class="d2h5byb5d"/><path class="pqlptybrj"/>`,
		"fallback": "energy-icons:flow-meter-48",
	});
}

export default Component;
