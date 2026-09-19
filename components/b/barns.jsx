import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m2dj7tbgk.css';
import '../../css/l/lqpc584em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m2dj7tbgk"/><path class="lqpc584em"/></g>`,
		"fallback": "hugeicons:barns",
	});
}

export default Component;
