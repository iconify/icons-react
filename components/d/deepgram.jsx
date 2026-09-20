import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic6i11b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic6i11b1t"/>`,
		"fallback": "simple-icons:deepgram",
	});
}

export default Component;
