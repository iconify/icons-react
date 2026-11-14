import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbz80rb1f.css';
import '../../css/f/fke_0j8nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rbz80rb1f"/><path class="fke_0j8nq"/></g>`,
		"fallback": "hugeicons:excavator",
	});
}

export default Component;
