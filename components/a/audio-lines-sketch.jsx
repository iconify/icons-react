import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rkuqwcccv.css';
import '../../css/o/ocm4x3bst.css';
import '../../css/y/ypm8tacew.css';
import '../../css/k/khxq59b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rkuqwcccv wm-k"/><path class="ocm4x3bst wm-a"/><path class="wm-k ypm8tacew"/><path class="khxq59b4x wm-a"/></g>`,
		"fallback": "withicons:audio-lines-sketch",
	});
}

export default Component;
