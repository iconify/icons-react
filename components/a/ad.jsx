import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwetujbzv.css';
import '../../css/y/y2vqhhbzu.css';
import '../../css/h/hcfp9ebwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xwetujbzv"/><rect class="y2vqhhbzu"/><path class="hcfp9ebwb"/></g>`,
		"fallback": "andrsrxn:ad",
	});
}

export default Component;
