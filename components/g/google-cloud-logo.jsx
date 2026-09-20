import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xk5arw_ed.css';
import '../../css/u/ubp_1ub4l.css';
import '../../css/m/myq80xbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="xk5arw_ed"/><path clip-rule="evenodd" class="ubp_1ub4l"/><path class="myq80xbsc"/></g>`,
		"fallback": "streamline-logos:google-cloud-logo",
	});
}

export default Component;
