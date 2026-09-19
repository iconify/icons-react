import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb9jrro5s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rb9jrro5s"/>`,
		"fallback": "glyphs:globe-east-outline",
	});
}

export default Component;
