import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2yshue7o.css';
import '../../css/e/e1xd40_pr.css';
import '../../css/z/z0rs_mbws.css';
import '../../css/v/vq9d_mwxs.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2yshue7o"/><path class="e1xd40_pr"/><path class="z0rs_mbws"/><path class="vq9d_mwxs"/>`,
		"fallback": "medical-icon:i-inpatient",
	});
}

export default Component;
