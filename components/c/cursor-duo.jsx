import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1nqy3byq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1nqy3byq"/>`,
		"fallback": "glyphs:cursor-duo",
	});
}

export default Component;
