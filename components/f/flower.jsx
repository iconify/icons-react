import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zluskmfki.css';
import '../../css/l/ld754blgk.css';
import '../../css/b/bucefnbvf.css';
import '../../css/n/ndsrwmbkq.css';
import '../../css/u/u92sb79cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zluskmfki"/><path class="ld754blgk wm-shadow"/><path class="bucefnbvf"/><path class="ndsrwmbkq"/><path class="u92sb79cl"/></g>`,
		"fallback": "withicons-brutal:flower",
	});
}

export default Component;
