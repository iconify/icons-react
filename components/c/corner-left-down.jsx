import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t75ebh15i.css';
import '../../css/u/uh9l1odyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t75ebh15i"/><path class="uh9l1odyz"/></g>`,
		"fallback": "hugeicons:corner-left-down",
	});
}

export default Component;
