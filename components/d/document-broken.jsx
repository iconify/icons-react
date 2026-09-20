import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h4m9tpedx.css';
import '../../css/g/g100mfbew.css';
import '../../css/h/hg-jr4bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h4m9tpedx"/><path class="g100mfbew"/><path class="hg-jr4bbd"/></g>`,
		"fallback": "solar:document-broken",
	});
}

export default Component;
