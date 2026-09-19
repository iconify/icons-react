import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n0ni1wbua.css';
import '../../css/m/mbuzo-xyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n0ni1wbua"/><path class="mbuzo-xyr"/></g>`,
		"fallback": "hugeicons:hand-beater",
	});
}

export default Component;
