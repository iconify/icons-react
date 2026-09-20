import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ya2h1ewyu.css';
import '../../css/j/jvd558cyr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ya2h1ewyu"/><path class="jvd558cyr"/></g>`,
		"fallback": "streamline-color:flash-off-flat",
	});
}

export default Component;
