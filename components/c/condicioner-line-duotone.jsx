import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r06h_3ljo.css';
import '../../css/p/pr6lxtbqk.css';
import '../../css/d/d2g69cbkx.css';
import '../../css/p/piipinbcz.css';
import '../../css/k/kkehyzd5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r06h_3ljo"/><path class="pr6lxtbqk"/><path class="d2g69cbkx"/><path class="piipinbcz"/><path class="kkehyzd5g"/></g>`,
		"fallback": "solar:condicioner-line-duotone",
	});
}

export default Component;
