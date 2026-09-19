import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nl9rckbyt.css';
import '../../css/o/o8i-u-sij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nl9rckbyt"/><path class="o8i-u-sij"/></g>`,
		"fallback": "hugeicons:heart-check",
	});
}

export default Component;
