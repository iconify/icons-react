import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xpp3k1okp.css';
import '../../css/k/kjk2ocb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xpp3k1okp"/><path class="kjk2ocb0m"/></g>`,
		"fallback": "keyline-icons:battery-sharp-fill",
	});
}

export default Component;
