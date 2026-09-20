import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zs43ogbwe.css';
import '../../css/b/bwaym3bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zs43ogbwe"/><path class="bwaym3bmx"/></g>`,
		"fallback": "keyline-icons:bike-sharp-fill",
	});
}

export default Component;
