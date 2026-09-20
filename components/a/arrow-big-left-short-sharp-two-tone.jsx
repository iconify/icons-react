import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/ndowq2jxm.css';
import '../../css/v/vm8f6tbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ndowq2jxm"/><path class="vm8f6tbhw"/></g>`,
		"fallback": "keyline-icons:arrow-big-left-short-sharp-two-tone",
	});
}

export default Component;
