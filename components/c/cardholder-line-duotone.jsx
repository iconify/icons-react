import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/j/j56zj4bua.css';
import '../../css/n/n0kyqub_b.css';
import '../../css/d/d8p_c0bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wf89k6buf"/><path class="j56zj4bua"/><path class="n0kyqub_b"/><path class="d8p_c0bee"/></g>`,
		"fallback": "solar:cardholder-line-duotone",
	});
}

export default Component;
