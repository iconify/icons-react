import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzv4l5-8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzv4l5-8a"/>`,
		"fallback": "ri:facebook-box-fill",
	});
}

export default Component;
