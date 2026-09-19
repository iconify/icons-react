import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6-xxm_2j.css';
import '../../css/q/qk15utbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6-xxm_2j"/><path class="qk15utbtb"/>`,
		"fallback": "boxicons:cricket-ball",
	});
}

export default Component;
