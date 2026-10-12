import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mulj2plzk.css';
import '../../css/i/i91_xcaxb.css';
import '../../css/h/hsnffjadq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12.14 12)" class="mulj2plzk"/><circle transform="rotate(90 12.14 12)" class="i91_xcaxb"/><path class="hsnffjadq"/></g>`,
		"fallback": "andrsrxn:broadcast",
	});
}

export default Component;
