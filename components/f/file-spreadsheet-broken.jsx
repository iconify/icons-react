import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/t/t4qaumccy.css';
import '../../css/n/nahi2pb-d.css';
import '../../css/m/mc83qmbii.css';
import '../../css/l/laxcdzoyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0cmz0boh"/><path class="t4qaumccy"/><path class="nahi2pb-d"/><path class="mc83qmbii"/><path class="laxcdzoyb"/></g>`,
		"fallback": "solar:file-spreadsheet-broken",
	});
}

export default Component;
