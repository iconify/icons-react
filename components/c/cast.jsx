import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/blp81zbjo.css';
import '../../css/t/tawckh_aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="blp81zbjo"/><path class="tawckh_aw"/></g>`,
		"fallback": "hugeicons:cast",
	});
}

export default Component;
