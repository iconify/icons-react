import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/x/xwwi3buwt.css';
import '../../css/n/niyg3v0_n.css';
import '../../css/d/dgp5v0brw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="xwwi3buwt"/><path class="niyg3v0_n"/><path class="dgp5v0brw"/></g>`,
		"fallback": "icon-park-outline:cocktail",
	});
}

export default Component;
