import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u06p2nbkp.css';
import '../../css/v/va2lvebsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="u06p2nbkp"/><path class="va2lvebsh"/></g>`,
		"fallback": "lets-icons:circle-right-light",
	});
}

export default Component;
