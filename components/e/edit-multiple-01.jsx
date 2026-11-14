import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kvu6erb4g.css';
import '../../css/k/k1ehdeb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kvu6erb4g"/><path class="k1ehdeb1z"/></g>`,
		"fallback": "hugeicons:edit-multiple-01",
	});
}

export default Component;
