import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr_rtccfq.css';
import '../../css/q/q3s24obkd.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr_rtccfq"/><path class="q3s24obkd"/>`,
		"fallback": "medical-icon:i-family-practice",
	});
}

export default Component;
