import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f2k_vfbyz.css';
import '../../css/y/ym9-7y2gf.css';
import '../../css/v/vh5vhwbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f2k_vfbyz"/><path class="ym9-7y2gf"/><path class="vh5vhwbgn"/></g>`,
		"fallback": "streamline-sharp:hierarchy-8",
	});
}

export default Component;
