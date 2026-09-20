import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n6jc5cliy.css';
import '../../css/k/ki04fs54m.css';
import '../../css/f/f60ws5rzi.css';
import '../../css/r/rpuozwbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n6jc5cliy"/><path class="ki04fs54m"/><path class="f60ws5rzi"/><path class="rpuozwbux"/></g>`,
		"fallback": "streamline-freehand:app-window-link",
	});
}

export default Component;
