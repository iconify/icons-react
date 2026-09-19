import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qonzim33l.css';
import '../../css/f/f_6o5bckh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="qonzim33l"/><path class="f_6o5bckh"/></g>`,
		"fallback": "icon-park:feiyu",
	});
}

export default Component;
