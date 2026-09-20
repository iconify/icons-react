import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/f/fn1p5fm9f.css';
import '../../css/x/x1se1px2n.css';
import '../../css/i/i3ie3ccuz.css';
import '../../css/v/vrpvrybar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ua_8dab4r"/><path class="fn1p5fm9f"/><path class="x1se1px2n"/><path class="i3ie3ccuz"/><path class="vrpvrybar"/></g>`,
		"fallback": "solar:git-fork-linear",
	});
}

export default Component;
