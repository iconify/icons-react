import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nuv42nezf.css';
import '../../css/u/ua23tdk7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nuv42nezf"/><path class="ua23tdk7l"/></g>`,
		"fallback": "hugeicons:congruent-to",
	});
}

export default Component;
