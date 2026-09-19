import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w5etd2brv.css';
import '../../css/e/e8rqw668u.css';
import '../../css/l/la-m96hrc.css';
import '../../css/s/s5iu1qo5l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="w5etd2brv"/><path class="e8rqw668u"/><path class="la-m96hrc"/><path class="s5iu1qo5l"/></g>`,
		"fallback": "icon-park:heavy-rain",
	});
}

export default Component;
