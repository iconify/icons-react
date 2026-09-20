import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l7y3mobci.css';
import '../../css/v/vew-iwbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l7y3mobci"/><path class="vew-iwbqo"/></g>`,
		"fallback": "streamline-sharp:bug-virus-browser",
	});
}

export default Component;
