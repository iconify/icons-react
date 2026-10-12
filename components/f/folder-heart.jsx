import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6bep90pz.css';
import '../../css/i/i28y05vcn.css';
import '../../css/y/yz_5if6hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l6bep90pz"/><path class="i28y05vcn"/><path class="yz_5if6hn"/></g>`,
		"fallback": "andrsrxn:folder-heart",
	});
}

export default Component;
