import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dzpgck5ce.css';
import '../../css/h/hexptijfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dzpgck5ce"/><path class="hexptijfy"/></g>`,
		"fallback": "hugeicons:banknote-arrow-up",
	});
}

export default Component;
