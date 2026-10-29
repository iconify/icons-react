import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bqi8s4bgh.css';
import '../../css/p/p3y-97bfh.css';
import '../../css/l/lo-bdo53p.css';
import '../../css/t/tcjvbpb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bqi8s4bgh wm-k"/><path class="p3y-97bfh wm-shadow"/><path class="lo-bdo53p wm-k"/><path class="tcjvbpb5r wm-a"/></g>`,
		"fallback": "withicons:gamepad-engrave",
	});
}

export default Component;
