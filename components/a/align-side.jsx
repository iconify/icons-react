import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xldwc8vhl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xldwc8vhl"/>`,
		"fallback": "glyphs:align-side",
	});
}

export default Component;
