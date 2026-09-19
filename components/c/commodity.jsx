import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ndycvloua.css';
import '../../css/n/n2rfvgnzc.css';
import '../../css/y/ybpq96i6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ndycvloua"/><path class="n2rfvgnzc"/><path class="ybpq96i6a"/></g>`,
		"fallback": "iconoir:commodity",
	});
}

export default Component;
