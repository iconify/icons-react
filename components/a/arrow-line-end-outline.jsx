import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzit4obey.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzit4obey"/>`,
		"fallback": "glyphs:arrow-line-end-outline",
	});
}

export default Component;
