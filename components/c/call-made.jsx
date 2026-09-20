import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxolemb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxolemb_h"/>`,
		"fallback": "mdi:call-made",
	});
}

export default Component;
