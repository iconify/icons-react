import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n6_fz1w1f.css';
import '../../css/b/b-lgj1bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n6_fz1w1f"/><path class="b-lgj1bzh"/></g>`,
		"fallback": "reicon:format-circle",
	});
}

export default Component;
