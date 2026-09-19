import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/puu5ycbjz.css';
import '../../css/d/dujv7kbvf.css';
import '../../css/e/eytnxnxck.css';
import '../../css/c/contxzbor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="puu5ycbjz"/><path class="dujv7kbvf"/><path class="eytnxnxck"/><path class="contxzbor"/></g>`,
		"fallback": "icon-park-outline:cooking",
	});
}

export default Component;
