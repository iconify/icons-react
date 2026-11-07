import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bw0sb19sc.css';
import '../../css/o/ohl_stbmh.css';
import '../../css/b/b-nnx4bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bw0sb19sc"/><path class="ohl_stbmh"/><path class="b-nnx4bkp"/></g>`,
		"fallback": "solar:archive-line-duotone",
	});
}

export default Component;
