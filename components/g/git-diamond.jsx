import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/idlw553oh.css';
import '../../css/n/ng70twb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="idlw553oh"/><path class="ng70twb4u"/></g>`,
		"fallback": "mynaui:git-diamond",
	});
}

export default Component;
