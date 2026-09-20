import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kdybctn7p.css';
import '../../css/d/drs9macuz.css';
import '../../css/s/sp3ujwwyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kdybctn7p"/><path class="drs9macuz"/><path class="sp3ujwwyq"/></g>`,
		"fallback": "keyline-icons:bot-sharp-fill",
	});
}

export default Component;
