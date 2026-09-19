import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/awiefiblu.css';
import '../../css/l/lhixp1bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="awiefiblu"/><path class="lhixp1bmg"/></g>`,
		"fallback": "hugeicons:cog",
	});
}

export default Component;
