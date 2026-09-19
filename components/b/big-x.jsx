import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn55ge7zx.css';
import '../../css/p/p9_9iqf-j.css';
import '../../css/g/g3y8pb1er.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tn55ge7zx"><path class="p9_9iqf-j"/><path class="g3y8pb1er"/></g>`,
		"fallback": "icon-park-solid:big-x",
	});
}

export default Component;
