import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afilt3-px.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="afilt3-px"/>`,
		"fallback": "glyphs:camera-bold",
	});
}

export default Component;
