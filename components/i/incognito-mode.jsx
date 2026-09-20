import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/zx9_gmbnh.css';
import '../../css/l/l_w9r2z_j.css';
import '../../css/u/uykzql27n.css';
import '../../css/r/r1y1iqgqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="zx9_gmbnh"/><path class="l_w9r2z_j"/><path class="uykzql27n"/><path class="r1y1iqgqt"/></g>`,
		"fallback": "streamline-sharp-color:incognito-mode",
	});
}

export default Component;
