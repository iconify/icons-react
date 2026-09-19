import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d0m1zubph.css';
import '../../css/e/e2bhb21jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d0m1zubph"/><path class="e2bhb21jn"/></g>`,
		"fallback": "hugeicons:file-minus-corner",
	});
}

export default Component;
