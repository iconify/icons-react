import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a2oe27btl.css';
import '../../css/n/nuzvfybet.css';
import '../../css/i/idkyqjb4q.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a2oe27btl"/><path class="nuzvfybet"/><path class="idkyqjb4q"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:euro-broken",
	});
}

export default Component;
