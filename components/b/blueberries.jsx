import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox7qxtbiu.css';
import '../../css/r/rkzx53b0r.css';
import '../../css/t/tqgbgbbck.css';
import '../../css/j/jstxnfb-a.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/sk5gvvbvt.css';
import '../../css/n/njaksp45w.css';
import '../../css/c/c2up2-cgl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ox7qxtbiu"/><path class="rkzx53b0r"/><circle class="tqgbgbbck"/><path class="jstxnfb-a"/><g class="jn8qy4bru"><path class="sk5gvvbvt"/><path class="njaksp45w"/><circle class="c2up2-cgl"/></g>`,
		"fallback": "openmoji:blueberries",
	});
}

export default Component;
