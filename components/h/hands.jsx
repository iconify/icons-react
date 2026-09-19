import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m-mtxqk7h.css';
import '../../css/r/r71t5ps3q.css';
import '../../css/m/m820zubuq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="m-mtxqk7h"/><path class="r71t5ps3q"/><path class="m820zubuq"/></g>`,
		"fallback": "icon-park-solid:hands",
	});
}

export default Component;
