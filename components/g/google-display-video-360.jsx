import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhqv_9bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhqv_9bbi"/>`,
		"fallback": "thesvg-color:google-display-video-360",
	});
}

export default Component;
