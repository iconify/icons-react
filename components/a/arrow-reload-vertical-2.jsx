import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/k/ktdme7bcb.css';
import '../../css/p/pn8dt8_1c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="ktdme7bcb"/><path class="pn8dt8_1c"/></g>`,
		"fallback": "streamline-color:arrow-reload-vertical-2",
	});
}

export default Component;
