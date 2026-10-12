import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h9d3fyjrw.css';
import '../../css/o/ovw7qog3m.css';
import '../../css/c/cwuhwnv2s.css';
import '../../css/v/vce2rf8kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h9d3fyjrw"/><path class="ovw7qog3m"/><rect class="cwuhwnv2s"/><path class="vce2rf8kl"/></g>`,
		"fallback": "andrsrxn:error-503",
	});
}

export default Component;
