import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxl77bmr.css';
import '../../css/q/qc_-83mex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrxl77bmr"/><path class="qc_-83mex"/>`,
		"fallback": "selfhst:hauk",
	});
}

export default Component;
