import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wpuo5f7ao.css';
import '../../css/v/vw0odjbmb.css';
import '../../css/j/jkmhhzb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wpuo5f7ao"/><path class="vw0odjbmb"/><path class="jkmhhzb3s"/></g>`,
		"fallback": "solar:cart-large-2-outline",
	});
}

export default Component;
