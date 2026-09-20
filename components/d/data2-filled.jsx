import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hr4pu4blu.css';
import '../../css/p/p5g5pxbqg.css';
import '../../css/k/k3eo_eo4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hr4pu4blu"/><path class="p5g5pxbqg"/><path class="k3eo_eo4g"/></g>`,
		"fallback": "reicon:data2-filled",
	});
}

export default Component;
