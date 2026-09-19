import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm_wj2bna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm_wj2bna"/>`,
		"fallback": "fa6-solid:bullhorn",
	});
}

export default Component;
