import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sks-tacsx.css';
import '../../css/h/hsmtyjbkf.css';
import '../../css/l/ld5saecis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sks-tacsx"/><path class="hsmtyjbkf"/><path class="ld5saecis"/></g>`,
		"fallback": "hugeicons:bell-minus",
	});
}

export default Component;
