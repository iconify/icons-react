import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oqz5_v7hs.css';
import '../../css/b/b-ei1w25m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oqz5_v7hs"/><path class="b-ei1w25m"/></g>`,
		"fallback": "hugeicons:image-add-02",
	});
}

export default Component;
