import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iwx9si_fo.css';
import '../../css/d/drfr_4djm.css';
import '../../css/w/wyt5m4hvc.css';
import '../../css/l/l1cumibmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iwx9si_fo"/><path class="drfr_4djm"/><path class="wyt5m4hvc"/><path class="l1cumibmu"/></g>`,
		"fallback": "mage:goals",
	});
}

export default Component;
