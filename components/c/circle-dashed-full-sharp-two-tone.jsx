import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yrnc_2blo.css';
import '../../css/f/f0z2coguk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yrnc_2blo"/><path class="f0z2coguk"/></g>`,
		"fallback": "keyline-icons:circle-dashed-full-sharp-two-tone",
	});
}

export default Component;
