import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/saug-4bzs.css';
import '../../css/o/oeo28rbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="saug-4bzs"/><path class="oeo28rbja"/></g>`,
		"fallback": "hugeicons:ai-browser",
	});
}

export default Component;
