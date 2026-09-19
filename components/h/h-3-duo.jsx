import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoeo9--2b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoeo9--2b"/>`,
		"fallback": "glyphs:h-3-duo",
	});
}

export default Component;
