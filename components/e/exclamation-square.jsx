import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/eronf4b0p.css';
import '../../css/c/c_nrtvb4r.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="eronf4b0p"/><path class="c_nrtvb4r"/><rect class="z7h9dmbpz"/></g>`,
		"fallback": "mage:exclamation-square",
	});
}

export default Component;
