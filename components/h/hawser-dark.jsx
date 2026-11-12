import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e53pislml.css';
import '../../css/z/zzm1u_hwi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e53pislml"/><path class="zzm1u_hwi"/>`,
		"fallback": "selfhst:hawser-dark",
	});
}

export default Component;
