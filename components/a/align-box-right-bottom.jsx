import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jq2m09baa.css';
import '../../css/x/xy4sc596w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jq2m09baa"/><path class="xy4sc596w"/></g>`,
		"fallback": "andrsrxn:align-box-right-bottom",
	});
}

export default Component;
