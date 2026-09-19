import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/l6-wjzcgj.css';
import '../../css/s/slg2lhb_o.css';
import '../../css/p/pv14qwbuv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="l6-wjzcgj"/><path class="slg2lhb_o"/><path class="pv14qwbuv"/></g>`,
		"fallback": "icon-park-outline:cloudy",
	});
}

export default Component;
