import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tocor874i.css';
import '../../css/p/py9kzvbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tocor874i"/><path class="py9kzvbrn"/></g>`,
		"fallback": "mage:arrow-up-left",
	});
}

export default Component;
