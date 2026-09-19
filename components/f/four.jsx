import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngk232z-s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngk232z-s"/>`,
		"fallback": "glyphs:four",
	});
}

export default Component;
