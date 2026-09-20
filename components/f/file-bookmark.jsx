import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zb_vxh5gs.css';
import '../../css/n/n6wsh-bqa.css';
import '../../css/e/e79pd9why.css';
import '../../css/t/tsu6e92pn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zb_vxh5gs"/><path class="n6wsh-bqa"/><path class="e79pd9why"/><path class="tsu6e92pn"/></g>`,
		"fallback": "streamline-flex-color:file-bookmark",
	});
}

export default Component;
