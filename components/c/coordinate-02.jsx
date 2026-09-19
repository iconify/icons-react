import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kol2iac3m.css';
import '../../css/t/t1zao4rim.css';
import '../../css/c/co2mcmbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kol2iac3m"/><path class="t1zao4rim"/><path class="co2mcmbal"/></g>`,
		"fallback": "hugeicons:coordinate-02",
	});
}

export default Component;
