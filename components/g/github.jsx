import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n5-bjcb7m.css';
import '../../css/i/ilqs6acrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n5-bjcb7m"/><path class="ilqs6acrj"/></g>`,
		"fallback": "hugeicons:github",
	});
}

export default Component;
