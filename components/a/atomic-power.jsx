import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zueb8fb3m.css';
import '../../css/y/y69zjmb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zueb8fb3m"/><path class="y69zjmb5j"/></g>`,
		"fallback": "hugeicons:atomic-power",
	});
}

export default Component;
