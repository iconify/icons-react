import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jsspaw5ps.css';
import '../../css/b/bq1lw6byj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jsspaw5ps"/><path class="bq1lw6byj"/></g>`,
		"fallback": "icon-park-solid:clipboard",
	});
}

export default Component;
