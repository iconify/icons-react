import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jg1e7ries.css';
import '../../css/h/hpsq9kmtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jg1e7ries"/><path class="hpsq9kmtw"/></g>`,
		"fallback": "hugeicons:bulb-charging",
	});
}

export default Component;
