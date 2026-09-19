import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to5_hpm1w.css';
import '../../css/g/g4457jhvt.css';
import '../../css/z/zm95khbyi.css';
import '../../css/q/qo31i1bng.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to5_hpm1w"><path class="g4457jhvt"/><path clip-rule="evenodd" class="zm95khbyi"/><path class="qo31i1bng"/></g>`,
		"fallback": "icon-park:brain",
	});
}

export default Component;
