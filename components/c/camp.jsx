import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgvzk42-j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgvzk42-j"/>`,
		"fallback": "glyphs:camp",
	});
}

export default Component;
