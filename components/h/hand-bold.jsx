import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq658992j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bq658992j"/>`,
		"fallback": "glyphs:hand-bold",
	});
}

export default Component;
