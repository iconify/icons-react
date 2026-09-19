import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2iwz_b-c.css';
import '../../css/d/d-7w0ebsy.css';
import '../../css/w/wqtq763ef.css';
import '../../css/j/j9k9ahbqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m2iwz_b-c"/><path class="d-7w0ebsy"/><path class="wqtq763ef"/><path class="j9k9ahbqs"/></g>`,
		"fallback": "icon-park-solid:adjacent-item",
	});
}

export default Component;
