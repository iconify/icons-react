import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy8lgtbrs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy8lgtbrs"/>`,
		"fallback": "glyphs:border-none",
	});
}

export default Component;
