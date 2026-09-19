import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_l78yaxm.css';
import '../../css/p/pvy_1nbjw.css';
import '../../css/u/ugb540alo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><ellipse class="h_l78yaxm"/><path class="pvy_1nbjw"/><path class="ugb540alo"/></g>`,
		"fallback": "hugeicons:database-zap",
	});
}

export default Component;
