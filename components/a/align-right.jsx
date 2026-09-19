import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/ryhle7qrl.css';
import '../../css/a/aa2jaubia.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ryhle7qrl"/><path class="aa2jaubia"/></g>`,
		"fallback": "icon-park-solid:align-right",
	});
}

export default Component;
