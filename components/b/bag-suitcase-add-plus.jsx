import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/og7xrbchw.css';
import '../../css/e/enjtvvbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="og7xrbchw"/><path class="enjtvvbac"/></g>`,
		"fallback": "streamline-sharp-color:bag-suitcase-add-plus",
	});
}

export default Component;
