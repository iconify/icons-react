import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qer-ux0pj.css';
import '../../css/e/e6x_lacct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="qer-ux0pj"/><path class="e6x_lacct"/></g>`,
		"fallback": "streamline-logos:adobe-after-effects-logo",
	});
}

export default Component;
