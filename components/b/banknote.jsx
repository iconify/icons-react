import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vewp37bih.css';
import '../../css/d/dgn65lb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vewp37bih"/><path class="dgn65lb1h"/></g>`,
		"fallback": "hugeicons:banknote",
	});
}

export default Component;
