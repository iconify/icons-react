import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbx1qqt1r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fbx1qqt1r"/>`,
		"fallback": "glyphs:fire-bold",
	});
}

export default Component;
