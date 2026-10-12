import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u4e__sbrn.css';
import '../../css/s/sr8esp53w.css';
import '../../css/z/zmto0objo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u4e__sbrn"/><path class="sr8esp53w"/><path class="zmto0objo"/></g>`,
		"fallback": "andrsrxn:decimals-more",
	});
}

export default Component;
