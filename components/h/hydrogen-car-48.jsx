import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkk820mfz.css';
import '../../css/w/w2_kf1b2m.css';
import '../../css/g/g2i6a7muy.css';
import '../../css/b/bi74gbbsh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkk820mfz"/><path class="w2_kf1b2m"/><path class="g2i6a7muy"/><path class="bi74gbbsh"/>`,
		"fallback": "energy-icons:hydrogen-car-48",
	});
}

export default Component;
