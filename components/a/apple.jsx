import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-qf5gbcg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-qf5gbcg"/>`,
		"fallback": "glyphs:apple",
	});
}

export default Component;
