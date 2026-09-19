import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9pw1tb7w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p9pw1tb7w"/>`,
		"fallback": "glyphs:elevator-bold",
	});
}

export default Component;
