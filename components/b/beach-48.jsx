import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxy5wbcie.css';
import '../../css/c/clh0ambgx.css';
import '../../css/w/wfx3nk7mg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxy5wbcie"/><path class="clh0ambgx"/><path class="wfx3nk7mg"/>`,
		"fallback": "energy-icons:beach-48",
	});
}

export default Component;
