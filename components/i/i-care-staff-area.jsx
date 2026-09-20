import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v155xpb1d.css';
import '../../css/x/x7ektt91o.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v155xpb1d"/><path class="x7ektt91o"/>`,
		"fallback": "medical-icon:i-care-staff-area",
	});
}

export default Component;
