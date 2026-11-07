import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zul_37c3k.css';
import '../../css/d/dwxx0cbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zul_37c3k"/><path class="dwxx0cbvg"/></g>`,
		"fallback": "solar:bolt-line-duotone",
	});
}

export default Component;
