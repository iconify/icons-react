import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9j1fpbum.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9j1fpbum"/>`,
		"fallback": "glyphs:hand-index",
	});
}

export default Component;
