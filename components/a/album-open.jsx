import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zmwq3spqd.css';
import '../../css/t/tqywrzb5u.css';
import '../../css/t/tdq4jhbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zmwq3spqd"/><path class="tqywrzb5u"/><path class="tdq4jhbph"/></g>`,
		"fallback": "iconoir:album-open",
	});
}

export default Component;
