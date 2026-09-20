import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kpwbe7bbo.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/x/xyob36bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kpwbe7bbo"/><path class="p53xcyb3q"/><path class="xyob36bij"/></g>`,
		"fallback": "keyline-icons:chart-candlestick-sharp-two-tone",
	});
}

export default Component;
