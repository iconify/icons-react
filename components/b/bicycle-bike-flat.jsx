import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wyf1fzb-l.css';
import '../../css/j/j5ml0ibed.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wyf1fzb-l"/><path class="j5ml0ibed"/></g>`,
		"fallback": "streamline-color:bicycle-bike-flat",
	});
}

export default Component;
