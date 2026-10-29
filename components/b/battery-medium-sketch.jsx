import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/leetrzeag.css';
import '../../css/i/ih39qpbch.css';
import '../../css/y/yjgegjbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="leetrzeag wm-a"/><path class="ih39qpbch wm-k"/><path class="wm-a yjgegjbzg"/></g>`,
		"fallback": "withicons:battery-medium-sketch",
	});
}

export default Component;
