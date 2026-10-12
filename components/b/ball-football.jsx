import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvukd7s7w.css';
import '../../css/c/cvicncc2u.css';
import '../../css/k/k-9ggr4ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dvukd7s7w"/><path class="cvicncc2u"/><path class="k-9ggr4ye"/></g>`,
		"fallback": "andrsrxn:ball-football",
	});
}

export default Component;
