import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lwom3q5we.css';
import '../../css/m/moikf8p9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lwom3q5we"/><path class="moikf8p9f"/></g>`,
		"fallback": "hugeicons:album-01",
	});
}

export default Component;
