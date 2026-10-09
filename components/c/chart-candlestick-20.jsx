import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-p0xm3rr.css';
import '../../css/e/eb5j48vwt.css';
import '../../css/m/m3rdxrnyn.css';
import '../../css/n/ndjuxyb-c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-p0xm3rr"/><path class="eb5j48vwt"/><path class="m3rdxrnyn"/><path class="ndjuxyb-c"/>`,
		"fallback": "energy-icons:chart-candlestick-20",
	});
}

export default Component;
