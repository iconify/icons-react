import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z31ro663j.css';
import '../../css/m/mvrr7db2a.css';
import '../../css/w/wbv8jlbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z31ro663j"/><path class="mvrr7db2a"/><path class="wbv8jlbpn"/></g>`,
		"fallback": "streamline-ultimate-color:common-file-horizontal",
	});
}

export default Component;
