import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4q6eknm.css';
import '../../css/a/ahzy9_h0v.css';
import '../../css/l/ln6f3q98l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ti4q6eknm"><path class="ahzy9_h0v"/><path class="ln6f3q98l"/></g>`,
		"fallback": "icon-park-outline:gymnastics-one",
	});
}

export default Component;
