import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjzczbv1j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/riz3hy1-t.css';
import '../../css/j/jriq20k1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjzczbv1j secondary"/><g class="dt0cm9dhy primary"><circle class="riz3hy1-t"/><path class="jriq20k1m"/></g>`,
		"fallback": "iconaut:clock-duo",
	});
}

export default Component;
