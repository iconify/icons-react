import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cpxmezbkl.css';
import '../../css/u/uz_9y4b7u.css';
import '../../css/b/b19zuobxy.css';
import '../../css/p/p_0bzob4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cpxmezbkl"/><path class="uz_9y4b7u"/><path class="b19zuobxy"/><path class="p_0bzob4s"/></g>`,
		"fallback": "covid:covid19-virus-3",
	});
}

export default Component;
