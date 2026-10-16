import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2spr2bve.css';
import '../../css/x/xlfcvcr0c.css';
import '../../css/q/q7ailzblg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2spr2bve"/><path class="xlfcvcr0c"/><path class="q7ailzblg"/>`,
		"fallback": "energy-icons:ceiling-light-48",
	});
}

export default Component;
