import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-s8crb-y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-s8crb-y"/>`,
		"fallback": "glyphs:directions-sign-1",
	});
}

export default Component;
