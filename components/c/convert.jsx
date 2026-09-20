import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s_cah8bvq.css';
import '../../css/r/rq828qbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s_cah8bvq"/><path class="rq828qbtd"/></g>`,
		"fallback": "reicon:convert",
	});
}

export default Component;
