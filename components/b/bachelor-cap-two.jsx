import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x4rmk8quk.css';
import '../../css/z/z0-86vbfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x4rmk8quk"/><path class="z0-86vbfi"/></g>`,
		"fallback": "icon-park-outline:bachelor-cap-two",
	});
}

export default Component;
