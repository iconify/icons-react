import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wotujmrpr.css';
import '../../css/s/sm_hxib8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wotujmrpr"/><path class="sm_hxib8g"/>`,
		"fallback": "carbon:folder-details",
	});
}

export default Component;
