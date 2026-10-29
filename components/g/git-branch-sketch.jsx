import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x02njxbgw.css';
import '../../css/a/akcmo7byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="x02njxbgw"/><path class="akcmo7byg"/></g>`,
		"fallback": "withicons:git-branch-sketch",
	});
}

export default Component;
