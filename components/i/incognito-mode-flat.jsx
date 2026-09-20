import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rqaur9b-p.css';
import '../../css/j/jzw3u9s-u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rqaur9b-p"/><path class="jzw3u9s-u"/></g>`,
		"fallback": "streamline-flex-color:incognito-mode-flat",
	});
}

export default Component;
