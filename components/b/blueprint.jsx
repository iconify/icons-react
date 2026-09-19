import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lk2fbiblq.css';
import '../../css/c/chzwg69ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lk2fbiblq"/><path class="chzwg69ol"/></g>`,
		"fallback": "hugeicons:blueprint",
	});
}

export default Component;
