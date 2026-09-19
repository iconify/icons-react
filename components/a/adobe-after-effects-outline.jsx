import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wmx43vbip.css';
import '../../css/d/dfs08jsbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wmx43vbip"/><path class="dfs08jsbz"/></g>`,
		"fallback": "basil:adobe-after-effects-outline",
	});
}

export default Component;
