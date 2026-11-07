import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wyf-9gbfh.css';
import '../../css/y/y5b5vx62r.css';
import '../../css/g/g100mfbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wyf-9gbfh"/><path class="y5b5vx62r"/><path class="g100mfbew"/></g>`,
		"fallback": "solar:document-line-duotone",
	});
}

export default Component;
