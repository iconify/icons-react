import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vros0jbdr.css';
import '../../css/u/ul4sdhbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vros0jbdr"/><path class="ul4sdhbvd"/></g>`,
		"fallback": "hugeicons:chat-question-01",
	});
}

export default Component;
