import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k88rdeb7o.css';
import '../../css/u/uy7tz-bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k88rdeb7o"/><path class="uy7tz-bwh"/>`,
		"fallback": "solar:armchair-2-bold-duotone",
	});
}

export default Component;
