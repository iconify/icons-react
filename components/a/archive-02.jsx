import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aaw98bbnd.css';
import '../../css/n/ni_9-t59v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aaw98bbnd"/><path class="ni_9-t59v"/></g>`,
		"fallback": "hugeicons:archive-02",
	});
}

export default Component;
