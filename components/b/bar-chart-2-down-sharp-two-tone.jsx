import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uguhxvbjd.css';
import '../../css/d/d2wv40upu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uguhxvbjd"/><path class="d2wv40upu"/></g>`,
		"fallback": "keyline-icons:bar-chart-2-down-sharp-two-tone",
	});
}

export default Component;
