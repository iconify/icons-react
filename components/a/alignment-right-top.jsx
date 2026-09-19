import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/v/vis-kwb7q.css';
import '../../css/d/drtcbybqj.css';
import '../../css/l/l04mvnuhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="vis-kwb7q"/><path class="drtcbybqj"/><path class="l04mvnuhc"/></g>`,
		"fallback": "icon-park:alignment-right-top",
	});
}

export default Component;
