import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jtkvb9fgt.css';
import '../../css/y/yp8xy3bjb.css';
import '../../css/y/yb8pm2b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jtkvb9fgt"/><path class="yp8xy3bjb"/><path class="yb8pm2b6m"/></g>`,
		"fallback": "keyline-icons:chart-scatter-sparkles-sharp-two-tone",
	});
}

export default Component;
