import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhu3-j6_p.css';
import '../../css/l/lu4r1yadz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mhu3-j6_p"/><path class="lu4r1yadz"/></g>`,
		"fallback": "hugeicons:heartbreak",
	});
}

export default Component;
