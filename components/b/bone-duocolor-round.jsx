import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq34xl16r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq34xl16r"/>`,
		"fallback": "coolicons:bone-duocolor-round",
	});
}

export default Component;
