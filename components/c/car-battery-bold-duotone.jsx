import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fbtabu1sz.css';
import '../../css/c/ch32guwfs.css';
import '../../css/k/kz8wrqbpn.css';
import '../../css/r/rd8q98hym.css';
import '../../css/g/gsv_k0fqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fbtabu1sz"/><path class="ch32guwfs"/><path class="kz8wrqbpn"/><path class="rd8q98hym"/><path class="gsv_k0fqo"/></g>`,
		"fallback": "solar:car-battery-bold-duotone",
	});
}

export default Component;
