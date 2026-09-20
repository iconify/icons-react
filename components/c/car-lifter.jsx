import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/t4_2vib2f.css';
import '../../css/x/xpls8jpku.css';
import '../../css/p/ps9f--bsc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="t4_2vib2f"/><path class="xpls8jpku"/><path class="ps9f--bsc"/></g>`,
		"fallback": "marketeq:car-lifter",
	});
}

export default Component;
