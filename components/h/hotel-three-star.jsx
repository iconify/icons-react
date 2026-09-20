import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/a/aej2_emhx.css';
import '../../css/w/wid9fwbvl.css';
import '../../css/y/yevlstbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="aej2_emhx"/><path class="wid9fwbvl"/><path class="yevlstbrb"/></g>`,
		"fallback": "streamline-sharp-color:hotel-three-star",
	});
}

export default Component;
