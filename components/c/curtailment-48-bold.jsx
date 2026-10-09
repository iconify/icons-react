import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjohp7bgw.css';
import '../../css/m/mipqo9b_v.css';
import '../../css/j/jxdpwusdl.css';
import '../../css/s/s1k8abbfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjohp7bgw"/><path class="mipqo9b_v"/><path class="jxdpwusdl"/><path class="s1k8abbfk"/>`,
		"fallback": "energy-icons:curtailment-48-bold",
	});
}

export default Component;
