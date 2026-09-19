import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/r/r6ry4vbgb.css';
import '../../css/g/gb25t4baj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="r6ry4vbgb"/><path class="gb25t4baj"/></g>`,
		"fallback": "icon-park-outline:editor",
	});
}

export default Component;
