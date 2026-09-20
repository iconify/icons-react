import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/l/l7m3398jy.css';
import '../../css/s/s96yev8ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="l7m3398jy"/><path class="s96yev8ao"/></g>`,
		"fallback": "lets-icons:credit-card",
	});
}

export default Component;
