import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm505bbhi.css';
import '../../css/p/p7p0_0bwx.css';
import '../../css/n/notfyccux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cm505bbhi"/><rect transform="rotate(-90 7.33 5.59)" class="p7p0_0bwx"/><path class="notfyccux"/></g>`,
		"fallback": "andrsrxn:clipboard-search",
	});
}

export default Component;
