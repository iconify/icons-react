import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/knttfobnd.css';
import '../../css/d/dm2ls-bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="knttfobnd"/><path class="dm2ls-bhz"/></g>`,
		"fallback": "keyline-icons:git-graph-sharp-fill",
	});
}

export default Component;
