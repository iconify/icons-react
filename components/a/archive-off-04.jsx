import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/plh9m0bma.css';
import '../../css/o/ounodv97i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="plh9m0bma"/><path class="ounodv97i"/></g>`,
		"fallback": "hugeicons:archive-off-04",
	});
}

export default Component;
