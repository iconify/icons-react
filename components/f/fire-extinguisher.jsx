import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugcmfac-c.css';
import '../../css/n/nqeft6d_u.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugcmfac-c"/><path class="nqeft6d_u"/>`,
		"fallback": "medical-icon:fire-extinguisher",
	});
}

export default Component;
