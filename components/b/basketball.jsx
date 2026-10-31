import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x9tlpeb-b.css';
import '../../css/b/bhtzexbvl.css';
import '../../css/m/mu1binbsn.css';
import '../../css/l/lzvy5umxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow x9tlpeb-b"/><path class="bhtzexbvl wm-shadow"/><path class="mu1binbsn"/><path class="lzvy5umxb"/></g>`,
		"fallback": "withicons-brutal:basketball",
	});
}

export default Component;
