import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky4n3ccwx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ky4n3ccwx"/>`,
		"fallback": "glyphs:hourglass-1-bold",
	});
}

export default Component;
