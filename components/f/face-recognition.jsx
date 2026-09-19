import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sq396fsku.css';
import '../../css/d/d6s409x-u.css';
import '../../css/g/g1m7edbey.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="sq396fsku"/><path class="d6s409x-u"/><path class="g1m7edbey"/></g>`,
		"fallback": "icon-park-outline:face-recognition",
	});
}

export default Component;
