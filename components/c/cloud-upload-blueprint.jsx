import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pogh8sbbj.css';
import '../../css/h/hvjon5apw.css';
import '../../css/j/jxypp_bkd.css';
import '../../css/t/tm19bt68n.css';
import '../../css/z/zklwrcbdn.css';
import '../../css/g/g6_477byu.css';
import '../../css/z/zawcaob5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="pogh8sbbj wm-deco"/><path class="hvjon5apw wm-deco"/><path class="jxypp_bkd wm-deco"/><path class="tm19bt68n wm-k"/><path class="wm-s zklwrcbdn"/><path class="g6_477byu wm-k"/><path class="wm-s zawcaob5w"/></g>`,
		"fallback": "withicons:cloud-upload-blueprint",
	});
}

export default Component;
