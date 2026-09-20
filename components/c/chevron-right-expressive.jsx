import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdt2dg_fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdt2dg_fo"/>`,
		"fallback": "nrk:chevron-right-expressive",
	});
}

export default Component;
