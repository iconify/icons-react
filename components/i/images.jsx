import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dh7z03bvs.css';
import '../../css/t/tthwrtzkx.css';
import '../../css/r/rt4cydqwb.css';
import '../../css/x/xhm_tdbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dh7z03bvs"/><path class="tthwrtzkx"/><circle class="rt4cydqwb"/><rect class="xhm_tdbwp"/></g>`,
		"fallback": "lucide:images",
	});
}

export default Component;
