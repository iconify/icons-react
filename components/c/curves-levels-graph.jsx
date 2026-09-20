import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/idsb5nb-n.css';
import '../../css/i/ihffidclk.css';
import '../../css/d/d7f84cbvk.css';
import '../../css/n/n7safbcwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="idsb5nb-n"/><path class="ihffidclk"/><path class="d7f84cbvk"/><path class="n7safbcwu"/></g>`,
		"fallback": "streamline-sharp-color:curves-levels-graph",
	});
}

export default Component;
