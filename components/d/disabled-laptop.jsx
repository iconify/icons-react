import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/o/okum_ubtb.css';
import '../../css/r/rwqfzub0d.css';
import '../../css/c/cg5yr93ex.css';
import '../../css/a/arejfylph.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="okum_ubtb"/><path class="rwqfzub0d"/><circle class="cg5yr93ex"/><path class="arejfylph"/></g>`,
		"fallback": "icon-park:disabled-laptop",
	});
}

export default Component;
