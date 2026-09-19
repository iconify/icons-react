import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewfjegb_z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewfjegb_z"/>`,
		"fallback": "glyphs:ampersand-1-bold",
	});
}

export default Component;
