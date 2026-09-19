import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh4g1sb3s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh4g1sb3s"/>`,
		"fallback": "glyphs:cross",
	});
}

export default Component;
