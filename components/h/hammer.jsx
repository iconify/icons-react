import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwl_jabpn.css';
import '../../css/j/jxfvkgb2p.css';
import '../../css/y/ybddlyukq.css';
import '../../css/r/rmx2knb0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwl_jabpn"/><path class="jxfvkgb2p"/><path class="ybddlyukq"/><path class="rmx2knb0y"/>`,
		"fallback": "fxemoji:hammer",
	});
}

export default Component;
