import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-5jfr_yc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-5jfr_yc"/>`,
		"fallback": "selfhst:amazon-music-dark",
	});
}

export default Component;
