import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx2qfgb3r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zx2qfgb3r"/>`,
		"fallback": "glyphs:comment-info-bold",
	});
}

export default Component;
