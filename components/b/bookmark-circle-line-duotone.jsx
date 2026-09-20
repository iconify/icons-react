import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtpjtzmbj.css';
import '../../css/z/zb2kedx8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dtpjtzmbj"/><path class="zb2kedx8a"/></g>`,
		"fallback": "solar:bookmark-circle-line-duotone",
	});
}

export default Component;
