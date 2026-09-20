import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/nk3dl4uds.css';
import '../../css/v/vwchbrbih.css';
import '../../css/n/n44hjyu5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="nk3dl4uds"/><path class="vwchbrbih"/><path class="n44hjyu5w"/></g>`,
		"fallback": "streamline-sharp-color:eco-house",
	});
}

export default Component;
