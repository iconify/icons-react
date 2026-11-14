import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqwj_7bjz.css';
import '../../css/n/n-3hotwfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dqwj_7bjz"/><path class="n-3hotwfy"/></g>`,
		"fallback": "hugeicons:axis-3d",
	});
}

export default Component;
