import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4d54nbgi.css';
import '../../css/n/nvnb2yl3l.css';
import '../../css/s/s164q9ezg.css';
import '../../css/p/px95rrtwn.css';
import '../../css/j/jvgtvgbul.css';
import '../../css/y/ycfniab1x.css';
import '../../css/r/r_ytq1zpp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4d54nbgi"/><path class="nvnb2yl3l"/><path class="s164q9ezg"/><path class="px95rrtwn"/><path class="jvgtvgbul"/><path class="ycfniab1x"/><path class="r_ytq1zpp"/>`,
		"fallback": "fxemoji:framewithtiles",
	});
}

export default Component;
