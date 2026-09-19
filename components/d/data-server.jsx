import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hoihubcdt.css';
import '../../css/q/qlkj-ye-j.css';
import '../../css/g/ga6yqxbkp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="hoihubcdt"/><path class="qlkj-ye-j"/><path class="ga6yqxbkp"/></g>`,
		"fallback": "icon-park-outline:data-server",
	});
}

export default Component;
