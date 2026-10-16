import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hneqcpbyv.css';
import '../../css/a/as0dl-bfc.css';
import '../../css/b/b___75bwh.css';
import '../../css/y/yqjm7ccwt.css';
import '../../css/c/c_qai1tcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hneqcpbyv"/><path class="as0dl-bfc"/><path class="b___75bwh"/><path class="yqjm7ccwt"/><path class="c_qai1tcu"/></g>`,
		"fallback": "andrsrxn:hard-drive-reload",
	});
}

export default Component;
