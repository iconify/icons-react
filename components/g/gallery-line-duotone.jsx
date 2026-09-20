import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/b/b6-1hacff.css';
import '../../css/p/p60zzsbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><circle class="b6-1hacff"/><path class="p60zzsbrp"/></g>`,
		"fallback": "solar:gallery-line-duotone",
	});
}

export default Component;
