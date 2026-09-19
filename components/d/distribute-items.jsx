import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouitsccbq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouitsccbq"/>`,
		"fallback": "glyphs:distribute-items",
	});
}

export default Component;
