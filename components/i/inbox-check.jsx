import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wqpfyoblb.css';
import '../../css/b/brqoombhq.css';
import '../../css/d/dzbr9ggbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wqpfyoblb"/><path class="brqoombhq"/><path class="dzbr9ggbp"/></g>`,
		"fallback": "mynaui:inbox-check",
	});
}

export default Component;
