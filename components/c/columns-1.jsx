import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxifazq2u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxifazq2u"/>`,
		"fallback": "glyphs:columns-1",
	});
}

export default Component;
