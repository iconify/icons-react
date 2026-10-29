import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x8us6ubuk.css';
import '../../css/u/uxh4s2grv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="x8us6ubuk"/><path class="uxh4s2grv"/></g>`,
		"fallback": "withicons:at-sign-sketch",
	});
}

export default Component;
