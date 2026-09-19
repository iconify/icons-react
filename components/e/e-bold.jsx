import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kde8uybpg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kde8uybpg"/>`,
		"fallback": "glyphs:e-bold",
	});
}

export default Component;
