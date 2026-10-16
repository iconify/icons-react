import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moyoz5fkv.css';
import '../../css/y/y15j-qbnx.css';
import '../../css/i/ipqck7_hs.css';
import '../../css/p/px64zkbmy.css';
import '../../css/o/op6ynzi8e.css';
import '../../css/g/g2q91bb8l.css';
import '../../css/j/j0i6jim5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moyoz5fkv"/><path class="y15j-qbnx"/><path class="ipqck7_hs"/><path class="px64zkbmy"/><path class="op6ynzi8e"/><path class="g2q91bb8l"/><path class="j0i6jim5w"/>`,
		"fallback": "energy-icons:aperture-48-bold",
	});
}

export default Component;
