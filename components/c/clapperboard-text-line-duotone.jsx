import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/h/hd_r6sdbz.css';
import '../../css/i/ix8cskbcl.css';
import '../../css/z/z4e6-1p3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="hd_r6sdbz"/><path class="ix8cskbcl"/><path class="z4e6-1p3b"/></g>`,
		"fallback": "solar:clapperboard-text-line-duotone",
	});
}

export default Component;
