import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi3t4znbv.css';
import '../../css/y/ynnkx3bur.css';
import '../../css/f/fextw-bxj.css';
import '../../css/q/qv_lb8s5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi3t4znbv"/><path class="ynnkx3bur"/><path class="fextw-bxj"/><path class="qv_lb8s5d"/>`,
		"fallback": "energy-icons:h2-molecule-48",
	});
}

export default Component;
