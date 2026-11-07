import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lcxm2bc4c.css';
import '../../css/r/rasqg796i.css';
import '../../css/i/i87_9e8dl.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lcxm2bc4c"/><path class="rasqg796i"/><path class="i87_9e8dl"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:basketball-broken",
	});
}

export default Component;
