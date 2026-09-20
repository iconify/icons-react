import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhyluob_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhyluob_t"/>`,
		"fallback": "mdi:clock-minus-outline",
	});
}

export default Component;
