import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2hliacfi.css';
import '../../css/n/ndpb5tb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2hliacfi"/><path class="ndpb5tb7o"/></g>`,
		"fallback": "andrsrxn:device-pc",
	});
}

export default Component;
