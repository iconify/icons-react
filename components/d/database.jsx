import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e_l4ddbdj.css';
import '../../css/k/k9htwcbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e_l4ddbdj"/><path class="k9htwcbsc"/></g>`,
		"fallback": "mynaui:database",
	});
}

export default Component;
