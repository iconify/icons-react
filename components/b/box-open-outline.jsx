import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpx0u7qjv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpx0u7qjv"/>`,
		"fallback": "glyphs:box-open-outline",
	});
}

export default Component;
