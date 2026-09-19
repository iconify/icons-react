import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/n/n81s34bxe.css';
import '../../css/z/z_a0sm3vz.css';
import '../../css/m/mbpbzw3km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="n81s34bxe"/><path class="z_a0sm3vz"/><path class="mbpbzw3km"/></g>`,
		"fallback": "iconamoon:cloud-error",
	});
}

export default Component;
