import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xgsp0_xbv.css';
import '../../css/y/yh9aznjrg.css';
import '../../css/v/vvteiwlre.css';
import '../../css/e/ede3shbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="xgsp0_xbv"/><path class="yh9aznjrg"/><path class="vvteiwlre"/><path class="ede3shbbu"/></g>`,
		"fallback": "hugeicons:cookie",
	});
}

export default Component;
