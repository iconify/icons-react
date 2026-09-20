import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wc_cf_sdm.css';
import '../../css/g/g-8e__26p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wc_cf_sdm"/><path clip-rule="evenodd" class="g-8e__26p"/></g>`,
		"fallback": "streamline-color:galaxy-1-flat",
	});
}

export default Component;
