import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4e0i62as.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v4e0i62as"/>`,
		"fallback": "glyphs:battery-4-bold",
	});
}

export default Component;
