import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/ma1cm1vdh.css';
import '../../css/e/ezuqc7blc.css';
import '../../css/k/kzmmr-3qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ma1cm1vdh"/><path class="ezuqc7blc"/><path class="kzmmr-3qy"/></g>`,
		"fallback": "andrsrxn:currency-exchange",
	});
}

export default Component;
