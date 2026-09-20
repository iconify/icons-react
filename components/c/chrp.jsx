import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j2sl4o6ba.css';
import '../../css/t/t47ktnq7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j2sl4o6ba"/><path class="t47ktnq7t"/></g>`,
		"fallback": "token:chrp",
	});
}

export default Component;
