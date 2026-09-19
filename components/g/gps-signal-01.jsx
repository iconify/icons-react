import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l_982k12n.css';
import '../../css/o/o4oqigbmb.css';
import '../../css/n/ny9wgu8al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l_982k12n"/><path class="o4oqigbmb"/><path class="ny9wgu8al"/></g>`,
		"fallback": "hugeicons:gps-signal-01",
	});
}

export default Component;
