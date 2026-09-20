import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8qw16bmp.css';
import '../../css/r/rqcx1bj2b.css';
import '../../css/u/udfii55xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8qw16bmp"/><path class="rqcx1bj2b"/><path class="udfii55xf"/>`,
		"fallback": "token:catheon",
	});
}

export default Component;
