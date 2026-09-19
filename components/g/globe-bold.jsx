import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv-c2w6li.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv-c2w6li"/>`,
		"fallback": "glyphs:globe-bold",
	});
}

export default Component;
