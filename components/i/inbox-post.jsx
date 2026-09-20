import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u3--ljb-e.css';
import '../../css/l/lcl05wufc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u3--ljb-e"/><path class="lcl05wufc"/></g>`,
		"fallback": "streamline-sharp:inbox-post",
	});
}

export default Component;
