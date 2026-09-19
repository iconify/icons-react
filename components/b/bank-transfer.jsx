import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/i5xriabpc.css';
import '../../css/j/juzlxjb7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="i5xriabpc"/><path class="juzlxjb7o"/></g>`,
		"fallback": "icon-park-outline:bank-transfer",
	});
}

export default Component;
