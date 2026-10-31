import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yi91jt44v.css';
import '../../css/l/lw4v3f7px.css';
import '../../css/r/r2m5_qvdt.css';
import '../../css/y/yg0fhct3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yi91jt44v"/><path class="lw4v3f7px wm-shadow"/><path class="r2m5_qvdt"/><path class="yg0fhct3h"/></g>`,
		"fallback": "withicons-brutal:corner-down-right",
	});
}

export default Component;
