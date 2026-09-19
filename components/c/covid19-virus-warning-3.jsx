import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/njv_4__ad.css';
import '../../css/o/o2k9am28j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="njv_4__ad"/><path class="o2k9am28j"/></g>`,
		"fallback": "covid:covid19-virus-warning-3",
	});
}

export default Component;
