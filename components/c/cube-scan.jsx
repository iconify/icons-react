import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kuc9ejy1g.css';
import '../../css/t/t6w3i0bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kuc9ejy1g"/><path class="t6w3i0bag"/></g>`,
		"fallback": "iconoir:cube-scan",
	});
}

export default Component;
