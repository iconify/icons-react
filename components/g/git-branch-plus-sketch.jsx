import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/btpv9l0sb.css';
import '../../css/l/ly2o3vbnn.css';
import '../../css/e/e4nl4q55e.css';
import '../../css/m/mc4olacnm.css';
import '../../css/x/xmcnbbcza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="btpv9l0sb"/><path class="ly2o3vbnn wm-k"/><path class="e4nl4q55e wm-s"/><path class="mc4olacnm wm-k"/><path class="wm-s xmcnbbcza"/></g>`,
		"fallback": "withicons:git-branch-plus-sketch",
	});
}

export default Component;
