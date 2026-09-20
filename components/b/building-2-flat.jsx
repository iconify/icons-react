import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z19wo6b1w.css';
import '../../css/n/ncdws9bkj.css';
import '../../css/m/mwkcixlvb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z19wo6b1w"/><path class="ncdws9bkj"/><path clip-rule="evenodd" class="mwkcixlvb"/></g>`,
		"fallback": "streamline-color:building-2-flat",
	});
}

export default Component;
