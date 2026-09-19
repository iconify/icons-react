import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ezz7v9oio.css';
import '../../css/q/qsmi7yamt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ezz7v9oio"/><path class="qsmi7yamt"/></g>`,
		"fallback": "hugeicons:bitcoin-down-01",
	});
}

export default Component;
