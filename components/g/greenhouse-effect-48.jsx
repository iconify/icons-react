import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzwpf0b4o.css';
import '../../css/e/em99sdy4o.css';
import '../../css/t/t_pv4sbxm.css';
import '../../css/l/l-tauacug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzwpf0b4o"/><path class="em99sdy4o"/><path class="t_pv4sbxm"/><path class="l-tauacug"/>`,
		"fallback": "energy-icons:greenhouse-effect-48",
	});
}

export default Component;
