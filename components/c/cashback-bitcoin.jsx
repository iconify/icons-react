import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bz59jbv1a.css';
import '../../css/v/v8g9vfbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bz59jbv1a"/><path class="v8g9vfbqd"/></g>`,
		"fallback": "hugeicons:cashback-bitcoin",
	});
}

export default Component;
