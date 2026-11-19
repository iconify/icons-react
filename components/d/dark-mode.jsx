import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1m46db8y.css';
import '../../css/r/rbjip29as.css';
import '../../css/h/h27vhbcct.css';
import '../../css/s/snzqhcb0q.css';
import '../../css/w/wswa2fo_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f1m46db8y"/><path class="rbjip29as"/><circle class="h27vhbcct"/><circle class="snzqhcb0q"/><path class="wswa2fo_n"/></g>`,
		"fallback": "andrsrxn:dark-mode",
	});
}

export default Component;
