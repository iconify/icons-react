import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tt5r9db4o.css';
import '../../css/m/myr3ywb_t.css';
import '../../css/i/ir-y7_huw.css';
import '../../css/h/hfw3qg2gr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="tt5r9db4o"/><path class="myr3ywb_t"/><path class="ir-y7_huw"/><path class="hfw3qg2gr"/></g>`,
		"fallback": "streamline-plump-color:atom",
	});
}

export default Component;
