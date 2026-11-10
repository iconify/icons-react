import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7jabvbxp.css';
import '../../css/k/kwwdfsb9n.css';
import '../../css/q/qhkj8rbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z7jabvbxp"/><path class="kwwdfsb9n"/><path class="qhkj8rbdk"/></g>`,
		"fallback": "andrsrxn:bedside-table",
	});
}

export default Component;
