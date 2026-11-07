import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i1og6obge.css';
import '../../css/g/gjnqambaa.css';
import '../../css/m/myrt-acvb.css';
import '../../css/h/h-8szej4p.css';
import '../../css/z/zfv0jff-m.css';
import '../../css/o/okwt3swec.css';
import '../../css/v/vnjc76_8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i1og6obge"/><path class="gjnqambaa"/><path class="myrt-acvb"/><path class="h-8szej4p"/><path class="zfv0jff-m"/><path class="okwt3swec"/><path class="vnjc76_8o"/></g>`,
		"fallback": "solar:crown-linear",
	});
}

export default Component;
