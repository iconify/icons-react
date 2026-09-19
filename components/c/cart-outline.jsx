import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/ayrv02bwd.css';
import '../../css/a/axt9ohbyr.css';
import '../../css/c/cly7zkdlc.css';
import '../../css/n/ncvieabhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="ayrv02bwd"/><circle class="axt9ohbyr"/><path class="cly7zkdlc"/><path class="ncvieabhv"/></g>`,
		"fallback": "bitcoin-icons:cart-outline",
	});
}

export default Component;
