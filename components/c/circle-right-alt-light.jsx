import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u06p2nbkp.css';
import '../../css/h/hj2b58qos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="u06p2nbkp"/><path class="hj2b58qos"/></g>`,
		"fallback": "lets-icons:circle-right-alt-light",
	});
}

export default Component;
