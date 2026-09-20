import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hycowrbya.css';
import '../../css/t/tmx7k0bws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hycowrbya"/><path class="tmx7k0bws"/></g>`,
		"fallback": "reicon:align-left3-filled",
	});
}

export default Component;
