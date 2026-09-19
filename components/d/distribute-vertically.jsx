import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/y-f6hmbhh.css';
import '../../css/r/ra83ujb3l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="y-f6hmbhh"/><path class="ra83ujb3l"/></g>`,
		"fallback": "icon-park-solid:distribute-vertically",
	});
}

export default Component;
