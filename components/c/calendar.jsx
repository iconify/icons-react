import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/p/pcbu8kb2s.css';
import '../../css/x/xrmmr3baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="pcbu8kb2s"/><path class="xrmmr3baa"/></g>`,
		"fallback": "lets-icons:calendar",
	});
}

export default Component;
