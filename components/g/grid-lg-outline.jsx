import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-__3ot9n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g-__3ot9n"/>`,
		"fallback": "glyphs:grid-lg-outline",
	});
}

export default Component;
