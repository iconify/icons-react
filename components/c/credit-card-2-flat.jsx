import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xdz-yacix.css';
import '../../css/n/nebbxlbtg.css';
import '../../css/h/h577y2miu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xdz-yacix"/><path clip-rule="evenodd" class="nebbxlbtg"/><path clip-rule="evenodd" class="h577y2miu"/></g>`,
		"fallback": "streamline-color:credit-card-2-flat",
	});
}

export default Component;
