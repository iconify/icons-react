import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wdr_ryitu.css';
import '../../css/b/b2em8ybdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wdr_ryitu"/><path class="b2em8ybdc"/></g>`,
		"fallback": "hugeicons:cardiogram-01",
	});
}

export default Component;
