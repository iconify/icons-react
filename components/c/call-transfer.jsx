import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tob96dp2q.css';
import '../../css/k/ki937_vam.css';
import '../../css/i/i2kyciuds.css';
import '../../css/t/t12s9ybmo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tob96dp2q"/><g class="ki937_vam"><path class="i2kyciuds"/><path class="t12s9ybmo"/></g>`,
		"fallback": "flat-color-icons:call-transfer",
	});
}

export default Component;
