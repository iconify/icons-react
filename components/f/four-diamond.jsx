import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q8mt4lb9q.css';
import '../../css/i/idlw553oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q8mt4lb9q"/><path class="idlw553oh"/></g>`,
		"fallback": "mynaui:four-diamond",
	});
}

export default Component;
