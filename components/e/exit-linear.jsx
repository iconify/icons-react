import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/into8ac1h.css';
import '../../css/w/wrv4ncc2w.css';
import '../../css/l/luu53hbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="into8ac1h"/><path class="wrv4ncc2w"/><path class="luu53hbat"/></g>`,
		"fallback": "solar:exit-linear",
	});
}

export default Component;
