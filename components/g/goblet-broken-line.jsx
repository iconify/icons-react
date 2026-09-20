import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb_4-lefx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb_4-lefx"/>`,
		"fallback": "ri:goblet-broken-line",
	});
}

export default Component;
