import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yrwgjjyby.css';
import '../../css/s/sagoktbin.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yrwgjjyby"/><path class="sagoktbin"/></g>`,
		"fallback": "streamline-color:epic-games-1-flat",
	});
}

export default Component;
