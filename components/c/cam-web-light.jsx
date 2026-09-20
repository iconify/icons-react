import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mx0ewsb4i.css';
import '../../css/t/t94t6tb6s.css';
import '../../css/r/rxtnv1b8t.css';
import '../../css/j/jcuabtghe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mx0ewsb4i"/><path class="t94t6tb6s"/><path class="rxtnv1b8t"/><path class="jcuabtghe"/></g>`,
		"fallback": "stash:cam-web-light",
	});
}

export default Component;
