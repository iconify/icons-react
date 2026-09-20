import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wgh5e8t6z.css';
import '../../css/e/eagvlsbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="wgh5e8t6z"/><path class="eagvlsbod"/></g>`,
		"fallback": "streamline-cyber:charlie-chaplin",
	});
}

export default Component;
