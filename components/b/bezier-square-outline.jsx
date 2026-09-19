import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb7v0vb6e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nb7v0vb6e"/>`,
		"fallback": "glyphs:bezier-square-outline",
	});
}

export default Component;
