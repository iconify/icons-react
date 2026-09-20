import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wyiqk3bzv.css';
import '../../css/q/q75y0swvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="wyiqk3bzv"/><path class="q75y0swvu"/></g>`,
		"fallback": "reicon:battery",
	});
}

export default Component;
