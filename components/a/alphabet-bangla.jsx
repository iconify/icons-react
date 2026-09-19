import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qabm15fef.css';
import '../../css/k/kpj13lb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qabm15fef"/><path class="kpj13lb3h"/></g>`,
		"fallback": "hugeicons:alphabet-bangla",
	});
}

export default Component;
