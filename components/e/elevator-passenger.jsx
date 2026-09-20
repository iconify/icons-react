import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq_3l-byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq_3l-byg"/>`,
		"fallback": "mdi:elevator-passenger",
	});
}

export default Component;
