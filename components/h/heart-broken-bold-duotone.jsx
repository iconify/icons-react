import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwbwyza6z.css';
import '../../css/w/wo_81unih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwbwyza6z"/><path class="wo_81unih"/>`,
		"fallback": "solar:heart-broken-bold-duotone",
	});
}

export default Component;
