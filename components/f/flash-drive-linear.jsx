import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ewk9ygb9b.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/l/l-y11jebw.css';
import '../../css/b/baa-5bbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ewk9ygb9b"/><path class="fyr67fbfm"/><path class="ewk9ygb9b"/><path class="l-y11jebw"/><path class="baa-5bbpt"/></g>`,
		"fallback": "solar:flash-drive-linear",
	});
}

export default Component;
