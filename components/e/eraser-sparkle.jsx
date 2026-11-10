import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni5yzcc4r.css';
import '../../css/n/nha6of4rc.css';
import '../../css/m/mi17ykb8a.css';
import '../../css/r/rgfcefvyl.css';
import '../../css/t/tv-ok3jcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ni5yzcc4r"/><path class="nha6of4rc"/><path class="mi17ykb8a"/><path class="rgfcefvyl"/><path class="tv-ok3jcg"/></g>`,
		"fallback": "andrsrxn:eraser-sparkle",
	});
}

export default Component;
