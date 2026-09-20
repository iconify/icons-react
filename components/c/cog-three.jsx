import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zm7xzccfh.css';
import '../../css/e/evx_9kalt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zm7xzccfh"/><path class="evx_9kalt"/></g>`,
		"fallback": "mynaui:cog-three",
	});
}

export default Component;
