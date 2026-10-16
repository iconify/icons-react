import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfj5nvclh.css';
import '../../css/a/ak0g09bxi.css';
import '../../css/d/d_mh23bho.css';
import '../../css/k/k_in4bc0v.css';
import '../../css/q/qjn0-tjei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lfj5nvclh"/><path class="ak0g09bxi"/><path class="d_mh23bho"/><circle transform="rotate(90 16 15.4)" class="k_in4bc0v"/><circle transform="matrix(0 1 1 0 17.9 18.94)" class="qjn0-tjei"/></g>`,
		"fallback": "andrsrxn:file-controls",
	});
}

export default Component;
