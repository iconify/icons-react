import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idppisblu.css';
import '../../css/j/j18770bgi.css';
import '../../css/w/wd27zub3a.css';
import '../../css/b/bp8plebcr.css';
import '../../css/r/rivq1nv_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="idppisblu"/><path class="j18770bgi"/><circle class="wd27zub3a"/><path class="bp8plebcr"/><path class="rivq1nv_i"/></g>`,
		"fallback": "solar:airbuds-right-line-duotone",
	});
}

export default Component;
