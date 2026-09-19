import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hrt15xihn.css';
import '../../css/d/dfb6i3blf.css';
import '../../css/s/shnvllc_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hrt15xihn"/><path class="dfb6i3blf"/><path class="shnvllc_b"/></g>`,
		"fallback": "hugeicons:drag-right-03",
	});
}

export default Component;
