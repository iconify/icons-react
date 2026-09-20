import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iugbchb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iugbchb_t"/>`,
		"fallback": "mdi:brightness-1",
	});
}

export default Component;
