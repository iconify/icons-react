import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siey_tgax.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siey_tgax"/>`,
		"fallback": "glyphs:a",
	});
}

export default Component;
