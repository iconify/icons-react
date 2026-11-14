import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uj7fv0eaz.css';
import '../../css/l/l2gk9_c6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uj7fv0eaz"/><path class="l2gk9_c6z"/></g>`,
		"fallback": "hugeicons:ai-cloud-01",
	});
}

export default Component;
