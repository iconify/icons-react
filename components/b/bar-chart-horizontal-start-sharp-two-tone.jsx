import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uc2kjd4-r.css';
import '../../css/t/ta5v13f3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uc2kjd4-r"/><path class="ta5v13f3f"/></g>`,
		"fallback": "keyline-icons:bar-chart-horizontal-start-sharp-two-tone",
	});
}

export default Component;
