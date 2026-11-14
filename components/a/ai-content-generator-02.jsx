import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yx2lqsd_d.css';
import '../../css/e/eeeta0sey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yx2lqsd_d"/><path class="eeeta0sey"/></g>`,
		"fallback": "hugeicons:ai-content-generator-02",
	});
}

export default Component;
