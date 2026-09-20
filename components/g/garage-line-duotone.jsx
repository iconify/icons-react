import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/t/ti-8hxbru.css';
import '../../css/g/gf8hoxv3z.css';
import '../../css/s/spvgpubdr.css';
import '../../css/g/gx380mbzb.css';
import '../../css/d/dwshg7bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="ti-8hxbru"/><path class="gf8hoxv3z"/><path class="spvgpubdr"/><path class="gx380mbzb"/><path class="dwshg7bba"/></g>`,
		"fallback": "solar:garage-line-duotone",
	});
}

export default Component;
