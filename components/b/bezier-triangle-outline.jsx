import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvc3xoy3d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nvc3xoy3d"/>`,
		"fallback": "glyphs:bezier-triangle-outline",
	});
}

export default Component;
