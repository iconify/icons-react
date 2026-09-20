import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ct-itjb4z.css';
import '../../css/f/fjjzljbgt.css';

const viewBox = {"width":124.4,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ct-itjb4z"/><path class="fjjzljbgt"/></g>`,
		"fallback": "thesvg:austrian-airlines",
	});
}

export default Component;
