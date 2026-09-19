import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7qcm_bbj.css';
import '../../css/d/ddqxzbcmd.css';
import '../../css/j/j-4d3bcgn.css';
import '../../css/r/rac8vkbxx.css';
import '../../css/h/hixjmmblv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7qcm_bbj"/><path class="ddqxzbcmd"/><path class="j-4d3bcgn"/><path class="rac8vkbxx"/><circle class="hixjmmblv"/>`,
		"fallback": "fxemoji:clipboard",
	});
}

export default Component;
