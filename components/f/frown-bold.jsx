import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1rqt3bjf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u1rqt3bjf"/>`,
		"fallback": "glyphs:frown-bold",
	});
}

export default Component;
