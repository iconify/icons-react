import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6rtj7bxp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6rtj7bxp"/>`,
		"fallback": "glyphs:hand-middle",
	});
}

export default Component;
