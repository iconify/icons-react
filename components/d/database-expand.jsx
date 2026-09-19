import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nn4yjsf4n.css';
import '../../css/j/jcw57d7cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nn4yjsf4n"/><path class="jcw57d7cw"/></g>`,
		"fallback": "hugeicons:database-expand",
	});
}

export default Component;
