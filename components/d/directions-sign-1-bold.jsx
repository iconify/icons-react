import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_fyccblx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_fyccblx"/>`,
		"fallback": "glyphs:directions-sign-1-bold",
	});
}

export default Component;
