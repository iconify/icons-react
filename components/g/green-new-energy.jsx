import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/u5e3th2av.css';
import '../../css/t/tzj5x4bar.css';
import '../../css/u/uo51vdbbb.css';
import '../../css/f/fjf0hmbod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="u5e3th2av"/><path class="tzj5x4bar"/><path class="uo51vdbbb"/><path class="fjf0hmbod"/></g>`,
		"fallback": "icon-park:green-new-energy",
	});
}

export default Component;
