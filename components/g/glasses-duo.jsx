import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykbbngpem.css';
import '../../css/g/g504dtw0m.css';
import '../../css/e/espoz0bpy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ykbbngpem"/><path class="g504dtw0m"/><path class="espoz0bpy"/></g>`,
		"fallback": "streamline-kameleon-color:glasses-duo",
	});
}

export default Component;
