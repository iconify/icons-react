import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mhu7obblh.css';
import '../../css/g/gdq8k5bkt.css';
import '../../css/t/tkxhsebdi.css';
import '../../css/f/fmw-r6bwf.css';
import '../../css/h/h4clv62jm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="mhu7obblh"/><path class="gdq8k5bkt"/><path class="tkxhsebdi"/><path class="fmw-r6bwf"/><path class="h4clv62jm"/></g>`,
		"fallback": "icon-park:horse-zodiac",
	});
}

export default Component;
