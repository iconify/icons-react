import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b0h64mbui.css';
import '../../css/n/n8t24oq7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b0h64mbui"/><path class="n8t24oq7q"/></g>`,
		"fallback": "reicon:element-plus",
	});
}

export default Component;
