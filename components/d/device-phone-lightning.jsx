import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6dzzd6ep.css';
import '../../css/n/ndlndtbgz.css';
import '../../css/m/m8fohzrnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p6dzzd6ep"/><path class="ndlndtbgz"/><path class="m8fohzrnd"/></g>`,
		"fallback": "andrsrxn:device-phone-lightning",
	});
}

export default Component;
