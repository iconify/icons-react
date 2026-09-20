import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bt_1mpo2v.css';
import '../../css/l/l1z-krb2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bt_1mpo2v"/><path class="l1z-krb2f"/></g>`,
		"fallback": "streamline-plump-color:escalator-up-flat",
	});
}

export default Component;
