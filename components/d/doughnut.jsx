import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/muvtlrodu.css';
import '../../css/g/gj1w2lbmt.css';
import '../../css/t/tecn4bbqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="muvtlrodu"/><circle class="gj1w2lbmt"/><path class="tecn4bbqc"/></g>`,
		"fallback": "icon-park-outline:doughnut",
	});
}

export default Component;
