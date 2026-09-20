import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ivr6k85sh.css';
import '../../css/t/txzeh5b2m.css';
import '../../css/g/gw2b5ibjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ivr6k85sh"/><path class="txzeh5b2m"/><path class="gw2b5ibjm"/></g>`,
		"fallback": "streamline-freehand-color:email-action-search",
	});
}

export default Component;
