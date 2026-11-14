import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s4ncqk2_x.css';
import '../../css/j/jm2eyfcso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s4ncqk2_x"/><path class="jm2eyfcso"/></g>`,
		"fallback": "hugeicons:ai-idea",
	});
}

export default Component;
