import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqu-oue1m.css';
import '../../css/e/exfwqbcbu.css';
import '../../css/f/f_6flzb3p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqu-oue1m"/><path class="exfwqbcbu"/><path class="f_6flzb3p"/>`,
		"fallback": "energy-icons:coffee-machine-48-bold",
	});
}

export default Component;
