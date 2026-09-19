import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp2s7bc1i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp2s7bc1i"/>`,
		"fallback": "glyphs:bars-offset-1",
	});
}

export default Component;
