import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pzgtuubjo.css';
import '../../css/r/r9eazyb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pzgtuubjo"/><path class="r9eazyb7l"/></g>`,
		"fallback": "hugeicons:ai-translate",
	});
}

export default Component;
