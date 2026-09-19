import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhv_4ex4m.css';
import '../../css/m/mj1c-3ccf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mhv_4ex4m"/><path class="mj1c-3ccf"/></g>`,
		"fallback": "hugeicons:archive-02",
	});
}

export default Component;
