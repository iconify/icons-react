import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7h6cqwxp.css';
import '../../css/t/ttoo35o3w.css';
import '../../css/h/h531ihy6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w7h6cqwxp"/><path class="ttoo35o3w"/><path class="h531ihy6r"/></g>`,
		"fallback": "andrsrxn:device-phone-lightning",
	});
}

export default Component;
