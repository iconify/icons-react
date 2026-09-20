import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2_ifvwys.css';
import '../../css/m/mv6y8gbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p2_ifvwys"/><path class="mv6y8gbvn"/></g>`,
		"fallback": "mynaui:camera",
	});
}

export default Component;
