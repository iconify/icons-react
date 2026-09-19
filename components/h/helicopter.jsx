import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by65-jbrg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by65-jbrg"/>`,
		"fallback": "glyphs:helicopter",
	});
}

export default Component;
