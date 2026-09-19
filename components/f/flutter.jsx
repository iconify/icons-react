import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9zm6abth.css';
import '../../css/h/ha140i38m.css';
import '../../css/c/cij3cro7f.css';
import '../../css/m/mthnz6bim.css';
import '../../css/i/izjyrbg3z.css';

const viewBox = {"width":4.233,"height":4.233};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e9zm6abth"><path class="ha140i38m"/><path class="cij3cro7f"/><path class="mthnz6bim"/><path class="izjyrbg3z"/></g>`,
		"fallback": "catppuccin:flutter",
	});
}

export default Component;
