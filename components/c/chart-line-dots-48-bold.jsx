import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpel3hezc.css';
import '../../css/u/up8bcwb4x.css';
import '../../css/a/ajie4vquo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpel3hezc"/><path class="up8bcwb4x"/><path class="ajie4vquo"/>`,
		"fallback": "energy-icons:chart-line-dots-48-bold",
	});
}

export default Component;
