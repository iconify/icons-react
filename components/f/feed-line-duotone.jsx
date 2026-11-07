import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bet-qjsfp.css';
import '../../css/d/dijt62q0o.css';
import '../../css/q/qirladu1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bet-qjsfp"/><path class="dijt62q0o"/><path class="qirladu1q"/></g>`,
		"fallback": "solar:feed-line-duotone",
	});
}

export default Component;
