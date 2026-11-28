import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u45dg3bwf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qeq7gbben.css';
import '../../css/j/jbsk87b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary u45dg3bwf"/><g class="dt0cm9dhy primary"><path class="qeq7gbben"/><path class="jbsk87b5k"/></g>`,
		"fallback": "iconaut:airplay-duo",
	});
}

export default Component;
