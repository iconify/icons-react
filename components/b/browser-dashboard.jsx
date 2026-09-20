import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/td2li1bqd.css';
import '../../css/h/hiknrmb5a.css';
import '../../css/k/k670-muck.css';
import '../../css/f/ftbjcpb6l.css';
import '../../css/x/xs2r8ub4x.css';
import '../../css/r/rgs6j1b_u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="td2li1bqd"/><path class="hiknrmb5a"/><path class="k670-muck"/><path class="ftbjcpb6l"/><path class="xs2r8ub4x"/><path class="rgs6j1b_u"/></g>`,
		"fallback": "streamline-flex-color:browser-dashboard",
	});
}

export default Component;
