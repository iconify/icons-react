import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb7q07bxp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb7q07bxp"/>`,
		"fallback": "glyphs:calendar",
	});
}

export default Component;
