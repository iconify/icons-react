import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/do9djbcui.css';
import '../../css/i/il9i7uoxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="do9djbcui"/><path class="il9i7uoxt"/></g>`,
		"fallback": "hugeicons:corn",
	});
}

export default Component;
