import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k8lu-pb7b.css';
import '../../css/x/xu9hkwgfp.css';
import '../../css/c/czt14wb2g.css';
import '../../css/t/tnxgc8bjt.css';
import '../../css/f/f072aqbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="k8lu-pb7b wm-shadow"/><path class="wm-shadow xu9hkwgfp"/><path class="czt14wb2g"/><path class="tnxgc8bjt"/><path class="f072aqbca"/></g>`,
		"fallback": "withicons-brutal:eraser",
	});
}

export default Component;
