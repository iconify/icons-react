import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/d/dq9l1yu4e.css';
import '../../css/a/aqj23kbhz.css';
import '../../css/s/slwiivbuz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="dq9l1yu4e"/><path class="aqj23kbhz"/><path class="slwiivbuz"/></g>`,
		"fallback": "icon-park:alignment-vertical-center",
	});
}

export default Component;
