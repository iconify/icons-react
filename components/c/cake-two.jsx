import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t4lfr94ic.css';
import '../../css/e/es2y4_69g.css';
import '../../css/l/l3a42pa9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="t4lfr94ic"/><path class="es2y4_69g"/><path class="l3a42pa9l"/></g>`,
		"fallback": "icon-park-outline:cake-two",
	});
}

export default Component;
