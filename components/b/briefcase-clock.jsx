import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0wtn_bvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0wtn_bvs"/>`,
		"fallback": "mdi:briefcase-clock",
	});
}

export default Component;
