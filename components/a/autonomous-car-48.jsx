import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkk820mfz.css';
import '../../css/w/w2_kf1b2m.css';
import '../../css/y/yk26dnbcq.css';
import '../../css/y/ywwm5s49b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkk820mfz"/><path class="w2_kf1b2m"/><path class="yk26dnbcq"/><path class="ywwm5s49b"/>`,
		"fallback": "energy-icons:autonomous-car-48",
	});
}

export default Component;
