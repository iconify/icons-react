import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wob9zsz-j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wob9zsz-j"/>`,
		"fallback": "glyphs:box",
	});
}

export default Component;
