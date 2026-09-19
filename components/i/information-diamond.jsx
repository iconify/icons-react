import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zp2hofbps.css';
import '../../css/j/jjvk5vb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zp2hofbps"/><path class="jjvk5vb6i"/></g>`,
		"fallback": "hugeicons:information-diamond",
	});
}

export default Component;
