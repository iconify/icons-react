import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7qew4bxu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7qew4bxu"/>`,
		"fallback": "glyphs:battery-100",
	});
}

export default Component;
