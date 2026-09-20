import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qpeaavbkh.css';
import '../../css/z/zapao2kog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qpeaavbkh"/><path class="zapao2kog"/></g>`,
		"fallback": "keyline-icons:cursor-dashed-panel-sharp-duotone",
	});
}

export default Component;
