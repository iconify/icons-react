import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c65vfbbco.css';
import '../../css/g/g1ooqityq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c65vfbbco"/><path class="g1ooqityq"/></g>`,
		"fallback": "streamline-sharp:help-chat-2",
	});
}

export default Component;
