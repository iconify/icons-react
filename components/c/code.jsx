import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzef6e9ev.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzef6e9ev"/>`,
		"fallback": "glyphs:code",
	});
}

export default Component;
