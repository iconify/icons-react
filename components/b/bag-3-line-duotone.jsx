import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d4kwc_czs.css';
import '../../css/a/aui6libkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d4kwc_czs"/><path class="aui6libkd"/></g>`,
		"fallback": "solar:bag-3-line-duotone",
	});
}

export default Component;
