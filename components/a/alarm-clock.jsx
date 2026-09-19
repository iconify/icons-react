import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ebc0s5b5b.css';
import '../../css/o/o1m9srbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ebc0s5b5b"/><path class="o1m9srbef"/></g>`,
		"fallback": "hugeicons:alarm-clock",
	});
}

export default Component;
