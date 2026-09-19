import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyl55v84k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyl55v84k"/>`,
		"fallback": "glyphs:e-duo",
	});
}

export default Component;
