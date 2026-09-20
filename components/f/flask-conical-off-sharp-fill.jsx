import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yh3m83bbv.css';
import '../../css/d/dspssdb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yh3m83bbv"/><path class="dspssdb2r"/></g>`,
		"fallback": "keyline-icons:flask-conical-off-sharp-fill",
	});
}

export default Component;
