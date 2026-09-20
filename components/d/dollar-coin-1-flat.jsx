import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqt-lnbvs.css';
import '../../css/f/fokawebdp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqt-lnbvs"/><path clip-rule="evenodd" class="fokawebdp"/></g>`,
		"fallback": "streamline-color:dollar-coin-1-flat",
	});
}

export default Component;
