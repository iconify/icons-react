import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eoxy6acbr.css';
import '../../css/u/ulb1r2b4u.css';
import '../../css/f/fw7hhqbnz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eoxy6acbr"/><path class="ulb1r2b4u"/><path class="fw7hhqbnz"/></g>`,
		"fallback": "streamline-kameleon-color:hammer-pop",
	});
}

export default Component;
